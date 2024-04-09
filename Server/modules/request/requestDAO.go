package request

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"practice/project/crypto-react-design/Server/models/request"
	"practice/project/crypto-react-design/Server/modules/database"

	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func GetBitCoinPriceDAO(BitCoinReq request.Request) ([]request.ApiDetails, error) {
	dsn := os.Getenv("MONGODSN")
	conn, err := database.GetMongoConnection(dsn)
	if err != nil {
		log.Println("Error creating a db connection", err)
		// return config, err
	}
	ctx, _ := context.WithTimeout(context.Background(), 15*time.Second)
	collection := conn.Database("cryptoServer").Collection("FreeApis")
	filter := bson.M{
		"coinName": BitCoinReq.CoinName,
	}
	cursor, Err := collection.Find(ctx, filter)
	if Err != nil {
		log.Println("ERROR : GetBitCoinPriceDAO", Err)
		log.Println("OUT :GetBitCoinPriceDAO ")
		return []request.ApiDetails{}, Err
	}
	defer cursor.Close(ctx)
	resultArr := []request.ApiDetails{}
	for cursor.Next(ctx) {
		var result request.ApiDetails
		err := cursor.Decode(&result)

		if err != nil {
			log.Println("Cursor.Next() Error: ", err)
			return []request.ApiDetails{}, err
		} else {
			// log.Println("\nresult type:", reflect.TypeOf(result))
			// log.Println("result:", result)
			resultArr = append(resultArr, result)
			GetCoinDataFromAPIDAO(result)

		}

	}
	return resultArr, nil
}

func GetCoinDataFromAPIDAO(ApiDetail request.ApiDetails) (int, error) {
	log.Println("IN GetCoinDataFromAPIDAO")
	var BitCoinResponse request.BitCoinDataFromApi
	Request, ReqErr := http.NewRequest(http.MethodGet, ApiDetail.Url, bytes.NewBuffer([]byte{}))

	if ReqErr != nil {
		log.Println("Error in API Call :", ReqErr)
		return 0, ReqErr
	}
	Client := &http.Client{Timeout: 60 * time.Second}

	responce, resErr := Client.Do(Request)

	if resErr != nil {
		log.Println("Error in HTTP request", resErr)
		return 0, resErr
	}
	defer responce.Body.Close()

	ResBody, resBodyError := ioutil.ReadAll(responce.Body)
	if resBodyError != nil {
		log.Println(" ERROR : CheckLocalEligibiltyDAO  -", resBodyError)
		return 0, resBodyError
	}

	// fmt.Println("REponce from API", string(ResBody))

	UnmarshalErr := json.Unmarshal(ResBody, &BitCoinResponse)

	if UnmarshalErr != nil {
		log.Println("ERROR : GetCoinDataFromAPIDAO unmarshal Error ", UnmarshalErr)

		return 0, nil
	}
	if responce.StatusCode == 200 {
		// fmt.Println(BitCoinResponse)
		BitCoinResponse.Data.CoinName = ApiDetail.CoinName

		noOfRow, err := InsertDataInMongo(BitCoinResponse.Data)
		if err != nil {
			return 0, err
		}
		return noOfRow, nil
	} else {
		return 0, errors.New("Errrorr")
	}
}

func InsertDataInMongo(BitcoinData request.BitCoinData) (int, error) {
	dsn := os.Getenv("MONGODSN")
	conn, err := database.GetMongoConnection(dsn)

	if err != nil {
		log.Println("Error in Monog Connnection in insertDataInMongo", err)
		return 0, err
	}
	ctx, _ := context.WithTimeout(context.Background(), 15*time.Second)

	next24HourData := request.BitCoinData{}
	next24HourData.TimeFrom = BitcoinData.TimeFrom + 86400 //add seconds
	next24HourData.TimeTo = BitcoinData.TimeTo + 86400
	for i, _ := range BitcoinData.Data {
		BitcoinData.Data[i].Time += 86400
	}
	next24HourData.Data = BitcoinData.Data
	next24HourData.CoinName = BitcoinData.CoinName
	result, err := conn.Database("cryptoServer").Collection("CoinsData").InsertOne(ctx, next24HourData)

	if err != nil {
		log.Println("ERrror in Insert opration", err)
		return 0, err
	}
	fmt.Println(result.InsertedID)
	return len(next24HourData.Data), err

}

func GetAPIdetails(CoinName string) (request.ApiDetails, error) {
	dsn := os.Getenv("MONGODSN")
	conn, err := database.GetMongoConnection(dsn)
	if err != nil {
		log.Println("Error creating a db connection", err)
		// return config, err
	}
	ctx, _ := context.WithTimeout(context.Background(), 15*time.Second)
	collection := conn.Database("cryptoServer").Collection("FreeApis")
	filter := bson.M{
		"coinName": CoinName,
	}
	cursor := collection.FindOne(ctx, filter)
	if cursor.Err() != nil {
		log.Println("ERROR : GetBitCoinPriceDAO", cursor.Err())
		log.Println("OUT :GetBitCoinPriceDAO ")
		return request.ApiDetails{}, cursor.Err()
	}
	var result request.ApiDetails
	err = cursor.Decode(&result)

	if err != nil {
		log.Println("Cursor.Next() Error: ", err)
		return request.ApiDetails{}, err
	} else {
		// log.Println("\nresult type:", reflect.TypeOf(result))
		// log.Println("result:", result)
		return result, nil

	}

}

func GetNext24HoursPriceDAO(BitCoinReq request.Request) (int, error) {
	log.Println("IN GetNext24HoursPriceDAO")
	ApiDetails, err := GetAPIdetails(BitCoinReq.CoinName)

	if err != nil {
		log.Println("ERROR in fatching API Data")
		return 0, err
	}
	noofrow, err := GetCoinDataFromAPIDAO(ApiDetails)
	if err != nil {
		log.Println("ERROR in GetCoinDataFromAPIDAO", err)
		return 0, err
	}
	return noofrow, nil
}

type resp struct {
	Data request.BitCoinTimeWiseData `bson:"data"`
}

func GetPreviousDataDAO(payload request.PreviousDataRequest) ([]request.BitCoinTimeWiseData, error) {

	var responseData []request.BitCoinTimeWiseData
	fmt.Println("payload", payload)
	dsn := os.Getenv("MONGODSN")
	conn, err := database.GetMongoConnection(dsn)

	if err != nil {
		log.Println("Error in Creating a db connection ", err)
		return []request.BitCoinTimeWiseData{}, err
	}

	ctx, _ := context.WithTimeout(context.Background(), 15*time.Second)

	collection := conn.Database("cryptoServer").Collection("CoinsData")
	timeFrom := payload.CurrentTime - int64(3600*payload.BeforeTimeInHour)

	fileter1 := bson.M{
		"coinName": payload.CoinName,
		"TimeFrom": bson.M{
			"$lte": payload.CurrentTime,
		},
		"TimeTo": bson.M{
			"$gte": payload.CurrentTime,
		},
	}

	filter := bson.M{
		"Data.time": bson.M{
			"$gte": timeFrom,
			"$lte": payload.CurrentTime,
		},
	}

	projection := bson.M{
		"Data": 1,
	}
	fmt.Println("Filter ", fileter1)
	fmt.Println("Filter2 ", filter)
	cursor, err := collection.Aggregate(ctx, mongo.Pipeline{
		{{"$match", fileter1}},
		{{"$unwind", "$Data"}},
		{{"$match", filter}},
		{{"$project", projection}},
	})

	if err != nil {
		log.Fatalln("Erron in Aggregate quesry ", err)
		return []request.BitCoinTimeWiseData{}, nil
	}
	defer cursor.Close(context.Background())
	// fmt.Println("len of array", cursor.Next(ctx))
	// var responseDatad resp
	// if err := cursor.All(ctx, &responseDatad); err != nil {
	// 	log.Fatal(err)
	// }
	// fmt.Println("respmds", responseDatad)
	for cursor.Next(ctx) {
		var result resp

		if err := cursor.Decode(&result); err != nil {
			log.Println("Error in Decoidng ", err)
			return responseData, err
		}
		// fmt.Println("Data", result)
		responseData = append(responseData, result.Data)

	}
	// fmt.Println("tenght", len(responseData))

	return responseData, nil

}

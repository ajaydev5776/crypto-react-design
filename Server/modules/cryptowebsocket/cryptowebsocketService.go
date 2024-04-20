package cryptowebsocket

import (
	"context"
	"fmt"
	"log"
	"os"
	"practice/project/crypto-react-design/Server/models/request"
	"practice/project/crypto-react-design/Server/modules/database"
	"sync"

	"strconv"
	"time"

	websocket "github.com/gorilla/websocket"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"gopkg.in/mgo.v2/bson"
)

var isStreamingOn = false
var Mux = &sync.RWMutex{}

func WebsocketReaderService(conn *websocket.Conn) {
	for {
		messageType, p, err := conn.ReadMessage()
		if err != nil {
			log.Println(err)
			return
		}
		fmt.Println(string(p))

		if err := conn.WriteMessage(messageType, p); err != nil {
			log.Println(err)
			return
		}
	}
}

func ServeWs(pool *Pool, conn *websocket.Conn, userId, coinName string) {
	fmt.Println("WebSocket Endpoint hit")

	// conn, err := Upgrade(w, r)

	// if err != nil {
	// 	log.Println(err)

	// }
	client := &Client{
		ID:   userId,
		Conn: conn,
		Pool: pool,
	}

	val, ok := pool.Clients[client.ID]

	if ok {
		fmt.Println("val ", val.Client.ID, " OK ", ok)
		fmt.Println("Client is already registerd for pool")
		pool.Unregister <- client
		fmt.Println(" Send client to reregister")
		pool.Register <- client
		// return
	} else {
		fmt.Println("New Client is registerd for pool")
		pool.Register <- client
		// client.Read()
		// SendMsgToBrodcast(pool, coinName)
	}

}

// func CheckIsClientAlreadyRegister(pool *Pool, client Client) bool {
// 	val, ok := pool.Clients[&client]

// }

//TODO: Add below function in cron job

func SendMsgToBrodcast(pool *Pool, coinName string) {
	if !isStreamingOn {
		go GetBitCoinPrice(pool, coinName)
		isStreamingOn = true
	}

}

func GetBitCoinPrice(pool *Pool, coinName string) (request.BitCoinTimeWiseData, error) {

	BitCoinData := request.BitCoinTimeWiseData{}
	currentTime := time.Now()
	inInt := currentTime.Unix()
	ctx := context.Background()
	dsn := os.Getenv("MONGODSN")
	conn, err := database.GetMongoConnection(dsn)
	if err != nil {
		log.Println("Error creating a db connection", err)
		return BitCoinData, err
	}
	fmt.Println("Coinname", coinName, inInt)
	filter := bson.M{
		"coinName": coinName,
		"TimeFrom": bson.M{"$lt": inInt},
		// "TimeTo": bson.M{"$gt": inInt - (3600 * int64(time.Second))},
		"TimeTo": bson.M{"$gt": inInt},
	}

	res := conn.Database("cryptoServer").Collection("CoinsData").FindOne(ctx, filter)
	if res.Err() == mongo.ErrNoDocuments {
		log.Printf("no documents found for the params examId :")
		return BitCoinData, res.Err()
	}
	if err != nil {
		return BitCoinData, err
	}
	fulldata := request.BitCoinData{}
	err = res.Decode(&fulldata)
	if err != nil {
		log.Println("Error decoding result from DB:", err)
		return BitCoinData, err
	}
	for i, v := range fulldata.Data {
		// fmt.Println(i, v)
		message := Message{Type: 1, Body: strconv.Itoa(i), BitCoinPrice: v}
		pool.Broadcast <- message
		time.Sleep(2 * time.Second)
	}
	return BitCoinData, nil
}

var LastHourData = make(map[string][]request.BitCoinTimeWiseData)

func SendDataToBroadcast(pool *Pool, coinName string) {
	Data, ok := GetDataFromLastHourData(coinName)
	minutIndex := time.Now().Minute()
	if !ok {
		log.Println("No Data found in cache for ", coinName)
		Data, err := setCoinDataToMap(coinName)
		if err != nil {
			log.Println("ERRror in Seting Data to Map ", err)
			return
		}

		pool, ok := PoolMap[coinName]
		if ok {
			message := Message{Type: 1, Body: strconv.Itoa(minutIndex), BitCoinPrice: Data[minutIndex]}
			pool.Broadcast <- message
		}
	} else {
		pool, ok := PoolMap[coinName]
		if ok {
			message := Message{Type: 1, Body: strconv.Itoa(minutIndex), BitCoinPrice: Data[minutIndex]}
			pool.Broadcast <- message
		}
		fmt.Println("bitCoinValue mintet", minutIndex, " bitCaoinValue ", Data[minutIndex])
	}

}
func TruncateToMin(t time.Time) time.Time {
	return time.Date(t.Year(), t.Month(), t.Day(), t.Hour(), 0, 0, 0, t.Location())
}
func setCoinDataToMap(coinName string) ([]request.BitCoinTimeWiseData, error) {
	var resultArr []request.BitCoinTimeWiseData
	currHour := TruncateToMin(time.Now()).Unix()
	ctx := context.Background()
	dsn := os.Getenv("MONGODSN")
	conn, err := database.GetMongoConnection(dsn)
	if err != nil {
		log.Println("Error creating a db connection", err)
		return []request.BitCoinTimeWiseData{}, err
		// return BitCoinData, err
	}
	fmt.Println("Coinname", coinName, currHour)
	// Pipeline := []bson.M{
	// 	bson.M{"$match": bson.M{"coinName": coinName}},
	// 	bson.M{"$match": bson.M{"$and": []bson.M{
	// 		bson.M{"time": bson.M{"gte": currHour}},
	// 		bson.M{"time": bson.M{"lt": currHour + 3600}},
	// 	},
	// 	},
	// 	},
	// }

	filter := bson.M{
		"coinName": coinName,
		"time": bson.M{
			"$gte": currHour,
			"$lte": currHour + 3600,
		},
	}
	options := options.Find().SetSort(bson.M{"time": 1})

	res, err := conn.Database("cryptoServer").Collection("BitCoinData").Find(ctx, filter, options)

	if err != nil {
		log.Printf("no documents found for the params :", err)
		return []request.BitCoinTimeWiseData{}, err
		// return BitCoinData, res.Err()
	}
	if err := res.All(ctx, &resultArr); err != nil {
		log.Println("Error in DAta binding", err)
		return []request.BitCoinTimeWiseData{}, err
	}
	_, ok := GetDataFromLastHourData(coinName)
	if !ok {
		UpdateLastHourMap(coinName, resultArr)
		log.Println("Data inserted for ", coinName, " on ", time.Now().String(), "count", len(resultArr))
		return resultArr, nil
	}
	UpdateLastHourMap(coinName, resultArr)

	log.Println("Data updated for ", coinName, " on ", time.Now().String(), "count", len(resultArr))
	fmt.Println("reessss", resultArr)
	return resultArr, nil
}

func (c *Client) Read() {
	defer func() {
		c.Pool.Unregister <- c
		c.Conn.Close()
	}()
	for {
		messgeType, p, err := c.Conn.ReadMessage()

		if err != nil {
			log.Println("Error in me=sg reading ", err)
			return
		}
		message := Message{Type: messgeType, Body: string(p)}

		// c.Pool.Broadcast <- message
		fmt.Println("MEssage Recived ", message)
	}
}

func UpdateLastHourMap(coinName string, Data []request.BitCoinTimeWiseData) {
	Mux.Lock()
	LastHourData[coinName] = Data
	Mux.Unlock()
}

func GetDataFromLastHourData(coinName string) ([]request.BitCoinTimeWiseData, bool) {
	Mux.RLock()
	Data, ok := LastHourData[coinName]
	defer Mux.RUnlock()
	return Data, ok

}

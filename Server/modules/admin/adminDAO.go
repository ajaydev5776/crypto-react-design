package admin

import (
	"context"
	"errors"
	"log"
	"os"
	"practice/project/crypto-react-design/Server/models/admin"
	"practice/project/crypto-react-design/Server/modules/database"
	"time"

	"github.com/google/uuid"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"

	"gopkg.in/mgo.v2/bson"
)

func FreezAccountsDAO(Accounts AccountAction) (bool, error) {
	log.Println("IN FreezAccountsDAO")
	dsn := os.Getenv("MONGODSN")
	conn, err := database.GetMongoConnection(dsn)

	if err != nil {
		log.Println("Error in Monog Connnection in GetTelegramLinkDAO", err)
		return false, err
	}
	ctx, _ := context.WithTimeout(context.Background(), 15*time.Second)
	collection := conn.Database("cryptoServer").Collection("userDetails")
	filter := bson.M{"phoneNo": bson.M{
		"$in": Accounts.Accounts,
	}}
	update := bson.M{
		"$set": bson.M{
			"accountStatus": Accounts.Action,
		},
	}
	_, err = collection.UpdateMany(ctx, filter, update)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			log.Println("No Doc Found to update")
			return false, nil
		}
		return false, err
	}
	return true, nil
}

func GetTelegramLinkDAO(linkobj admin.TelegramLink) (admin.TelegramLink, error) {
	log.Println("IN GetTelegramLinkDAO")
	dsn := os.Getenv("MONGODSN")
	conn, err := database.GetMongoConnection(dsn)

	if err != nil {
		log.Println("Error in Monog Connnection in GetTelegramLinkDAO", err)
		return linkobj, err
	}
	ctx, _ := context.WithTimeout(context.Background(), 15*time.Second)
	collection := conn.Database("cryptoServer").Collection("TelegramLinks")
	// _, err = collection.InsertOne(ctx, bson.M{"userName": userTran.UserName, "userId": userTran.UserId, "coinName": userTran.CoinName, "coinAvailable": userTran.CoinAvailable, "investedAmount": userTran.InvestedAmount, "investedDate": userTran.InvestedDate})
	resobj := admin.TelegramLink{}
	filter := bson.M{"key": linkobj.Key}
	err = collection.FindOne(ctx, filter).Decode(&resobj)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			log.Println("No doc found ", err)
			return resobj, nil
		}
		return resobj, err
	}
	return resobj, nil

}

func UpdateTelegramLinkDAO(linkObj admin.TelegramLink) (bool, error) {
	log.Println("IN UpdateTelegramLinkDAO")
	dsn := os.Getenv("MONGODSN")
	conn, err := database.GetMongoConnection(dsn)

	if err != nil {
		log.Println("Error in Monog Connnection in insertDataInMongo", err)
		return false, err
	}
	ctx, _ := context.WithTimeout(context.Background(), 15*time.Second)
	collection := conn.Database("cryptoServer").Collection("TelegramLinks")
	// _, err = collection.InsertOne(ctx, bson.M{"userName": userTran.UserName, "userId": userTran.UserId, "coinName": userTran.CoinName, "coinAvailable": userTran.CoinAvailable, "investedAmount": userTran.InvestedAmount, "investedDate": userTran.InvestedDate})

	filter := bson.M{"key": linkObj.Key}
	update := bson.M{
		"$set": bson.M{
			"link": linkObj.Link,
		},
	}
	// update := bson.D{{"$set", bson.D{{"link", linkObj.Link}}}}
	opts := options.Update().SetUpsert(true)

	_, err = collection.UpdateOne(ctx, filter, update, opts)

	if err != nil {
		log.Println("Error in Upserting data in collation", err)
		return false, err
	}
	return true, nil
}

func AddCoinToUserAccountDAO(userTran admin.UserTransitions) (bool, error) {
	log.Println("IN AddCoinToUserAccountDAO")
	dsn := os.Getenv("MONGODSN")
	conn, err := database.GetMongoConnection(dsn)

	if err != nil {
		log.Println("Error in Monog Connnection in insertDataInMongo", err)
		return false, err
	}
	ctx, _ := context.WithTimeout(context.Background(), 15*time.Second)
	currTime := time.Now().String()
	userTran.InvestedDate = currTime

	collection := conn.Database("cryptoServer").Collection("TransitionDetails")
	// _, err = collection.InsertOne(ctx, bson.M{"userName": userTran.UserName, "userId": userTran.UserId, "coinName": userTran.CoinName, "coinAvailable": userTran.CoinAvailable, "investedAmount": userTran.InvestedAmount, "investedDate": userTran.InvestedDate})
	_, err = collection.InsertOne(ctx, userTran)

	if err != nil {
		log.Println("Error in instertinf data")
		return false, err
	}

	return true, nil

}
func AddPlanAmountDAO(planDetail PlanAmount) (bool, error) {
	log.Println("IN AddPlanAmounDAO")
	dsn := os.Getenv("MONGODSN")
	conn, err := database.GetMongoConnection(dsn)

	if err != nil {
		log.Println("Error in Monog Connnection in insertDataInMongo", err)
		return false, err
	}
	ctx, _ := context.WithTimeout(context.Background(), 15*time.Second)

	collection := conn.Database("cryptoServer").Collection("userDetails")

	filter := bson.M{"phoneNo": planDetail.PhoneNo}

	var existingUser admin.UserDetails

	err = collection.FindOne(ctx, filter).Decode(&existingUser)
	if err != nil {

		return false, err

	}
	update := bson.M{"$set": bson.M{"amountToShow": planDetail.Amount, "isPlanBuy": planDetail.PlanNo}}
	optio := options.Update().SetUpsert(true)
	_, err = collection.UpdateOne(ctx, filter, update, optio)

	if err != nil {
		return false, err
	}
	return true, nil
}
func DeleteTranDAO(trans TranDetail) (bool, error) {
	log.Println("IN DeleteTranDAO")
	dsn := os.Getenv("MONGODSN")
	conn, err := database.GetMongoConnection(dsn)

	if err != nil {
		log.Println("Error in Monog Connnection in insertDataInMongo", err)
		return false, err
	}
	ctx, _ := context.WithTimeout(context.Background(), 15*time.Second)

	collection := conn.Database("cryptoServer").Collection("TransitionDetails")
	objectId, _ := primitive.ObjectIDFromHex(trans.TransID)

	// filter := bson.M{"_id": objectId}

	// var existingUser admin.UserDetails

	// err = collection.FindOne(ctx, filter).Decode(&existingUser)
	// if err != nil {
	// 	if err == mongo.ErrNoDocuments {
	// 		return false, errors.New("Phone number not exist in Server")
	// 	} else {
	// 		return false, err
	// 	}
	// }
	update := bson.M{"$set": bson.M{"isDeleted": true}}
	optio := options.Update().SetUpsert(true)
	_, err = collection.UpdateOne(ctx, bson.M{"_id": objectId}, update, optio)

	if err != nil {
		return false, err
	}
	return true, nil
}

func GetAllTransitionDetailsDAO() ([]admin.UserTransitions, error) {
	log.Println("IN GetAllTransitionDetailsDAO")
	dsn := os.Getenv("MONGODSN")
	conn, err := database.GetMongoConnection(dsn)

	if err != nil {
		log.Println("Error in Monog Connnection in insertDataInMongo", err)
		return []admin.UserTransitions{}, err
	}
	ctx, _ := context.WithTimeout(context.Background(), 15*time.Second)

	collection := conn.Database("cryptoServer").Collection("TransitionDetails")

	tranData := []admin.UserTransitions{}
	option := options.Find().SetSort(bson.M{"_id": -1})
	cursr, err := collection.Find(ctx, bson.M{}, option)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			return tranData, nil
		}
		return tranData, err
	}

	err = cursr.All(ctx, &tranData)
	if err != nil {
		return tranData, err
	}
	return tranData, nil

}

func UpdatePlanDetailsDAO(planDetails PlanDetails) (bool, error) {
	log.Println("IN UpdateUserPasswordDAO")
	dsn := os.Getenv("MONGODSN")
	conn, err := database.GetMongoConnection(dsn)

	if err != nil {
		log.Println("Error in Monog Connnection in insertDataInMongo", err)
		return false, err
	}
	ctx, _ := context.WithTimeout(context.Background(), 15*time.Second)

	collection := conn.Database("cryptoServer").Collection("Plans")
	filter := bson.M{"planNo": planDetails.PlanNo}

	// var existingUser admin.UserDetails

	// err = collection.FindOne(ctx, filter).Decode(&existingUser)
	// if err != nil {
	// 	if err == mongo.ErrNoDocuments {
	// 		return false, errors.New("Phone number not exist in Server")
	// 	} else {
	// 		return false, err
	// 	}
	// }
	update := bson.M{}

	if planDetails.Amount != "" {
		update["amount"] = planDetails.Amount
	}
	if planDetails.Duration != "" {
		update["duration"] = planDetails.Duration
	}
	if planDetails.OfferText != "" {
		update["offerText"] = planDetails.OfferText
	}
	if planDetails.Line1 != "" {
		update["line1"] = planDetails.Line1
	}
	if planDetails.Line2 != "" {
		update["line2"] = planDetails.Line2
	}
	if planDetails.Line3 != "" {
		update["line3"] = planDetails.Line3
	}
	updateB := bson.M{"$set": update}
	opts := options.Update().SetUpsert(true)
	_, err = collection.UpdateOne(ctx, filter, updateB, opts)

	if err != nil {
		return false, err
	}
	return true, nil
}

func UpdateUserPasswordDAO(userdetails UpdateUserPass) (bool, error) {
	log.Println("IN UpdateUserPasswordDAO")
	dsn := os.Getenv("MONGODSN")
	conn, err := database.GetMongoConnection(dsn)

	if err != nil {
		log.Println("Error in Monog Connnection in insertDataInMongo", err)
		return false, err
	}
	ctx, _ := context.WithTimeout(context.Background(), 15*time.Second)

	collection := conn.Database("cryptoServer").Collection("userDetails")
	filter := bson.M{"phoneNo": userdetails.PhoneNo}

	var existingUser admin.UserDetails

	err = collection.FindOne(ctx, filter).Decode(&existingUser)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			return false, errors.New("Phone number not exist in Server")
		} else {
			return false, err
		}
	}
	update := bson.M{"password": userdetails.Password}
	_, err = collection.UpdateOne(ctx, filter, update)

	if err != nil {
		return false, errors.New("Error in inserting new User")
	}
	return true, nil

}

func addNewUserDAO(userDetail admin.UserDetails) (string, error) {

	log.Println("IN Add USER DAO")

	dsn := os.Getenv("MONGODSN")
	conn, err := database.GetMongoConnection(dsn)

	if err != nil {
		log.Println("Error in Monog Connnection in insertDataInMongo", err)
		return "", err
	}
	ctx, _ := context.WithTimeout(context.Background(), 15*time.Second)

	collection := conn.Database("cryptoServer").Collection("userDetails")
	filter := bson.M{"phoneNo": userDetail.PhoneNo}

	var existingUser admin.UserDetails

	err = collection.FindOne(ctx, filter).Decode(&existingUser)
	if err == nil {
		return "", errors.New("phone number already exists")
	} else if err != mongo.ErrNoDocuments {
		return "", errors.New("phone number already exists")
	}
	Id := uuid.NewString()
	userDetail.UserId = Id
	userDetail.CreatedOn = time.Now().String()
	userDetail.AccountStatus = "active"
	userDetail.AmountToShow = 4999
	_, err = collection.InsertOne(ctx, userDetail)

	if err != nil {
		return "", errors.New("Error in inserting new User")
	}

	return userDetail.UserId, nil
}

func AdminLoginDAO(loginDetails admin.LoginDetails) (bool, error) {
	log.Println("IN AddminLoginDAO")
	dsn := os.Getenv("MONGODSN")
	conn, err := database.GetMongoConnection(dsn)
	if err != nil {
		log.Println("Error in Monog Connnection in insertDataInMongo", err)
		return false, err
	}
	ctx, _ := context.WithTimeout(context.Background(), 15*time.Second)

	collection := conn.Database("cryptoServer").Collection("owner")

	filter := bson.M{
		"userName": loginDetails.UserName,
		"passWord": loginDetails.PassWord,
	}
	testuser := admin.LoginDetails{}
	err = collection.FindOne(ctx, filter).Decode(&testuser)

	if err != nil || err == mongo.ErrNoDocuments {
		return false, nil
	}
	return true, nil

}

func getUserDetailsByPhoneDAO(phoneNo string) (admin.UserDetailswithoutPass, error) {

	log.Println("IN AddminLoginDAO")
	dsn := os.Getenv("MONGODSN")
	conn, err := database.GetMongoConnection(dsn)
	if err != nil {
		log.Println("Error in Monog Connnection in insertDataInMongo", err)
		return admin.UserDetailswithoutPass{}, err
	}
	ctx, _ := context.WithTimeout(context.Background(), 15*time.Second)

	collection := conn.Database("cryptoServer").Collection("userDetails")
	filter := bson.M{
		"phoneNo": phoneNo,
	}
	userDetails := admin.UserDetailswithoutPass{}

	err = collection.FindOne(ctx, filter).Decode(&userDetails)

	if err != nil || err == mongo.ErrNoDocuments {
		return userDetails, err
	}
	return userDetails, err
}

func GetTotalUserDAO() ([]admin.UserDetails, error) {
	log.Println("IN GetTotalUserDAO")
	dsn := os.Getenv("MONGODSN")

	conn, err := database.GetMongoConnection(dsn)

	if err != nil {
		log.Println("Error in Monog Connnection in GetTotalUserDAO", err)
		return []admin.UserDetails{}, err
	}
	ctx, _ := context.WithTimeout(context.Background(), 15*time.Second)

	collection := conn.Database("cryptoServer").Collection("userDetails")

	userDetails := []admin.UserDetails{}

	curser, err := collection.Find(ctx, bson.M{})

	if err != nil {
		log.Println("Error in getting data from mongo db", err)
		return []admin.UserDetails{}, err
	}

	err = curser.All(ctx, &userDetails)
	if err != nil {
		log.Println("Error in binding Data ", err)
		return userDetails, err
	}

	return userDetails, nil

}

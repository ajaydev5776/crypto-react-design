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
	"go.mongodb.org/mongo-driver/mongo"

	"gopkg.in/mgo.v2/bson"
)

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
	_, err = collection.InsertOne(ctx, userDetail)

	if err != nil {
		return "", errors.New("Error in inserting new User")
	}

	return userDetail.UserId, nil
}

package database

import (
	"context"
	"log"
	"practice/project/crypto-react-design/Server/modules/helpers"

	"sync"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var MongoInstance = helpers.NewSafeMap[string, *mongo.Client]()
var sessionError = helpers.NewSafeMap[string, error]()
var onceMap = map[string]*sync.Once{}

//GetMongoConnection method

func GetMongoConnection(mongoDsnName string) (*mongo.Client, error) {
	once, ok := onceMap[mongoDsnName]

	if !ok {
		once = &sync.Once{}
	}

	once.Do(func() {
		onceMap[mongoDsnName] = once
		clientOptions := options.Client().ApplyURI(mongoDsnName)
		client, err := mongo.Connect(context.Background(), clientOptions)

		if err != nil {
			log.Println("Error connecting to mongoDB client reason:", err)
			log.Fatal(err)
		}
		if err := client.Ping(context.TODO(), nil); err != nil {
			log.Println("Error while ping mongo client reson: ", err)
			log.Fatal(err)
		}
		log.Println("Connected to mongoDB!!!")
		MongoInstance.Put(mongoDsnName, client)
	})
	return MongoInstance.Get(mongoDsnName), sessionError.Get(mongoDsnName)
}

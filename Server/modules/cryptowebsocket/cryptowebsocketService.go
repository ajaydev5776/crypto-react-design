package cryptowebsocket

import (
	"context"
	"fmt"
	"log"
	"os"
	"practice/project/crypto-react-design/Server/models/request"
	"practice/project/crypto-react-design/Server/modules/database"

	"strconv"
	"time"

	websocket "github.com/gorilla/websocket"
	"go.mongodb.org/mongo-driver/mongo"
	"gopkg.in/mgo.v2/bson"
)

var isStreamingOn = false

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

func ServeWs(pool *Pool, conn *websocket.Conn, userId string) {
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
		SendMsgToBrodcast(pool)
	}

}

// func CheckIsClientAlreadyRegister(pool *Pool, client Client) bool {
// 	val, ok := pool.Clients[&client]

// }

func SendMsgToBrodcast(pool *Pool) {
	if !isStreamingOn {
		go GetBitCoinPrice(pool)
		isStreamingOn = true
	}

}

func GetBitCoinPrice(pool *Pool) (request.BitCoinTimeWiseData, error) {

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

	filter := bson.M{
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

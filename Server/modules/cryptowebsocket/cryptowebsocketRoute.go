package cryptowebsocket

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	websocket "github.com/gorilla/websocket"
)

type Client struct {
	ID   string
	Conn *websocket.Conn
	Pool *Pool
}

var BTCpool = &Pool{}
var USDTpool = &Pool{}

func Init(o, r *gin.RouterGroup) {
	BTCpool = NewPool()
	USDTpool = NewPool()
	go USDTpool.Start()
	go BTCpool.Start()
	o.GET("ws/getbitcoinvalue", GetBitCoinValueRoute)
}

// var upgrader = cryptowebsocket.Upgrader{
//   ReadBufferSize: 1024,
//   WriteBufferSize: 1024,
// }

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin:     func(r *http.Request) bool { return true },
}

func Upgrade(w http.ResponseWriter, r *http.Request) (*websocket.Conn, error) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println("error in Upgrade", err)
		return nil, err
	}
	return conn, nil
}

type Msg struct {
	Coin   string `json:"coin"`
	UserId string `json:"userId"`
}

func GetBitCoinValueRoute(c *gin.Context) {
	// upgrader.CheckOrigin = func(r *http.Request) bool { return true }
	// ws, err := upgrader.Upgrade(c.Writer, c.Request, nil)
	conn, err := Upgrade(c.Writer, c.Request)

	if err != nil {
		log.Println(err)

	}

	_, p, err := conn.ReadMessage()
	if err != nil {
		log.Println("Error in Reding message init", err)
		return
	}
	msg := Msg{}
	err = json.Unmarshal(p, &msg)
	if err != nil {
		log.Println("Error in unmarshaling message init", err)
		return
	}
	fmt.Println("CoinfNAMe", msg.Coin)
	// log.Println("Client Connected")
	if msg.Coin == "BTC" {
		ServeWs(BTCpool, conn, msg.UserId)
	} else if msg.Coin == "USDT" {
		ServeWs(USDTpool, conn, msg.UserId)
	}
	// WebsocketReaderService(ws)
}

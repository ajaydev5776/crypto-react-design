package cryptowebsocket

import (
	"fmt"
	"practice/project/crypto-react-design/Server/models/request"
)

type Message struct {
	Type         int                         `json:"type"`
	Body         string                      `json:"body"`
	BitCoinPrice request.BitCoinTimeWiseData `json:"bitCoinPrice"`
}

type ClientStatus struct {
	Client *Client
	Status bool
}

type Pool struct {
	Register   chan *Client
	Unregister chan *Client
	Clients    map[string]ClientStatus
	Broadcast  chan Message
}

func NewPool() *Pool {
	return &Pool{
		Register:   make(chan *Client),
		Unregister: make(chan *Client),
		Clients:    make(map[string]ClientStatus),
		Broadcast:  make(chan Message),
	}
}

func (pool *Pool) Start() {
	for {
		select {
		case client := <-pool.Register:
			pool.Clients[client.ID] = ClientStatus{Client: client, Status: true}
			fmt.Println("Size of Connection Pool in Register: ", len(pool.Clients))
			for client, ClientStatus := range pool.Clients {
				fmt.Println(ClientStatus.Client, "Client ID ", client)
				// client.Conn.WriteJSON(Message{Type: 1, Body: "New User Joined..."})
			}
			break
		case client := <-pool.Unregister:
			fmt.Println("Size of Connection Pool in brfore delete Unregister: ", len(pool.Clients))
			delete(pool.Clients, client.ID)
			fmt.Println("Size of Connection Pool in Unregister: ", len(pool.Clients))
			for _, ClientStatus := range pool.Clients {
				ClientStatus.Client.Conn.WriteJSON(Message{Type: 1, Body: "User Disconnected..."})
			}
			break
		case message := <-pool.Broadcast:
			fmt.Println("Sending message to all clients in Pool")
			for _, ClientStatus := range pool.Clients {
				if err := ClientStatus.Client.Conn.WriteJSON(message); err != nil {
					pool.Unregister <- ClientStatus.Client
					fmt.Println(err)
					return
				}
			}
		}
	}
}

package main

import (
	"context"
	"practice/project/crypto-react-design/Server/api"
	"practice/project/crypto-react-design/Server/modules/database"

	// "practice/TimePass/Server/api"

	"io"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	log.Println("Init Crypto Server")
	log.Println("Starting Server....")

	router := gin.Default()
	api.Init(router)

	srv := &http.Server{
		Addr:    ":4480",
		Handler: router,
	}

	go func() {
		if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatalf("Failed to initialize server: %v\n", err)
		}
	}()

	log.Println("Listing on port", srv.Addr)

	quit := make(chan os.Signal)

	signal.Notify(quit, syscall.SIGINT, syscall.SIGALRM)

	<-quit

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	//TODO KILL MONGO CONNECTIONS HERE
	// shutdown data sources
	if err := killDBConnections(); err != nil {
		log.Fatalf("A problem occurred gracefully shutting down data sources: %v\n", err)
	}

	// Shutdown server
	log.Println("Shutting down server...")
	if err := srv.Shutdown(ctx); err != nil {
		log.Fatalf("Server forced to shutdown: %v\n", err)
	}

	dsn := os.Getenv("MONGODSN")
	_, err := database.GetMongoConnection(dsn)
	if err != nil {
		log.Println("Error creating a db connection", err)
		// return nil, err
	}

}

func killDBConnections() error {
	// sqlConn := database.Sqlinstance
	mongoConn := database.MongoInstance
	var err error
	// for k, v := range sqlConn {
	// 	if err = v.Close(); err != nil {
	// 		log.Printf("Error closing SQL conection %s", k)
	// 		return err
	// 	}
	// }
	keys := mongoConn.Keys()
	for _, v := range keys {
		conn := mongoConn.Get(v)
		if err = conn.Disconnect(context.TODO()); err != nil {
			log.Printf("Error closing Mongo conection %s", v)
			return err
		}
	}
	return err
}

func init() {
	logfile, err := os.OpenFile("./logs/app_"+time.Now().Format("2006-01-02")+".log", os.O_APPEND|os.O_RDWR|os.O_CREATE, 0775)

	if err != nil {
		log.Fatal(err)
	}

	mw := io.MultiWriter(os.Stdout, logfile)

	log.SetFlags(log.LstdFlags | log.Lshortfile | log.LUTC)
	log.SetOutput(mw)

	err = godotenv.Load(".env.dev")
	if err != nil {
		log.Fatalf("Error Loding Configs")
	}

	// dsn := os.Getenv("EXAMMONGODSN")
	// _, err = database.GetMongoConnection(dsn)
	// if err != nil {
	// 	log.Println("Error creating a db connection", err)
	// 	// return nil, err
	// }
}

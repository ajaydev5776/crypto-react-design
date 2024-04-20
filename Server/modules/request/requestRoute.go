package request

import (
	"errors"
	"log"
	"net/http"
	"practice/project/crypto-react-design/Server/models/request"
	"practice/project/crypto-react-design/Server/modules/cronjob"
	"practice/project/crypto-react-design/Server/modules/cryptowebsocket"

	"github.com/gin-gonic/gin"
)

func Init(o, r *gin.RouterGroup) {
	o.POST("request/getbitcoin", GetBitCoin)
	o.POST("request/getdatafornext24hours", GetDataForNext24Hours)
	o.POST("request/getpreviousdata", GetPreviousDataRoute)
	o.GET("request/startcronjob", StartCronJobs)
	o.POST("request/getnexthourdata", GetNextHourDataRoute)
	o.GET("request/test", testRoute)
}

func testRoute(c *gin.Context) {
	cryptowebsocket.SendDataToBroadcast(cryptowebsocket.PoolMap["BTC"], "BTC")
}

func GetNextHourDataRoute(c *gin.Context) {
	BitCoinReq := request.Request{}

	if err := c.Bind(&BitCoinReq); err != nil {
		log.Println("Error : GetBitCoinRoute ", err)
	}
	if BitCoinReq.CoinName == "" {
		log.Println("Error : CoinName should not be empty")
		c.JSON(http.StatusExpectationFailed, "ERROR_EMPTY_FIELD_ERROR")
		return
	}

	resp, err := GetNextHourDataDAO(BitCoinReq)
	if err != nil {
		log.Println("Erron in get hourly data", err)
		c.JSON(http.StatusInternalServerError, err)
		return
	}
	c.JSON(http.StatusOK, resp)
	return
}

func GetBitCoin(c *gin.Context) {
	BitCoinReq := request.Request{}

	if err := c.Bind(&BitCoinReq); err != nil {
		log.Println("Error : GetBitCoinRoute ", err)
	}
	if BitCoinReq.CoinName == "" {
		log.Println("Error : CoinName should not be empty")
		c.JSON(http.StatusExpectationFailed, "ERROR_EMPTY_FIELD_ERROR")
		return
	}

	NoOfRecordInserted, err := GetBitCoinPriceService(BitCoinReq)
	if err != nil {
		log.Println("ERROR : GetBitCoinPriceService ", err)
		c.JSON(http.StatusExpectationFailed, err)
		return
	}
	c.JSON(http.StatusOK, NoOfRecordInserted)

}

func GetDataForNext24Hours(c *gin.Context) {
	BitCoinReq := request.Request{}
	if err := c.Bind(&BitCoinReq); err != nil {
		log.Println("Error : GetBitCoinRoute ", err)
		c.JSON(http.StatusExpectationFailed, errors.New("Payload in incorrect"))
		return
	}

	if BitCoinReq.CoinName == "" {
		log.Println("Error : CoinName should not Empty")
		c.JSON(http.StatusExpectationFailed, "ERROR_EMPTY_FIELD_ERROR")
		return
	}

	NoOfRecordInserted, err := GetNext24HoursData(BitCoinReq)
	if err != nil {
		log.Println("ERROR : GetBitCoinPriceService ", err)
		c.JSON(http.StatusExpectationFailed, err)
		return
	}
	c.JSON(http.StatusOK, NoOfRecordInserted)
}

func GetPreviousDataRoute(c *gin.Context) {

	log.Println("In GetPreviousData")
	payload := request.PreviousDataRequest{}

	if err := c.Bind(&payload); err != nil {
		log.Println("Error in Binding Data", err)
		c.JSON(http.StatusExpectationFailed, err)
		return
	}

	previousData, err := GetPreviousDataService(payload)

	if err != nil {
		log.Println("Error in GetPreviousDataService", err)
		c.JSON(http.StatusExpectationFailed, err)
		return
	}
	c.JSON(http.StatusOK, previousData)
	return

}

func StartCronJobs(c *gin.Context) {
	resp, err := cronjob.StartCronForCoin("BTC")
	if err != nil {
		log.Println(err)
	}
	c.JSON(http.StatusOK, resp)
	return
}

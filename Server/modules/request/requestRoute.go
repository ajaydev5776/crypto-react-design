package request

import (
	"errors"
	"fmt"
	"log"
	"net/http"
	"practice/project/crypto-react-design/Server/models/request"
	"practice/project/crypto-react-design/Server/modules/cryptowebsocket"

	// "practice/project/crypto-react-design/Server/modules/cronjob"

	"github.com/gin-gonic/gin"
)

func Init(o, r *gin.RouterGroup) {
	o.POST("request/getbitcoin", GetBitCoin)
	o.POST("request/getdatafornext24hours", GetDataForNext24Hours)
	o.POST("request/getpreviousdata", GetPreviousDataRoute)
	o.GET("request/startcronjob", StartCronJobs)
	o.POST("request/getnexthourdata", GetNextHourDataRoute)
	o.POST("request/getcoincurrentvalue", GetCoinCurrentValueRoute)
	o.POST("user/login", UserLoginRoute)
	o.POST("user/validateid", ValidateIdRoute)
	o.GET("request/test", testRoute)
	o.POST("request/getalltransitionofuser", GetAllTransitionOfUserRoute)
	o.POST("request/getcoinvalue", GetCoinValueRoute)
	o.GET("request/getallplan", GetAllPlanRoute)
	// o.POST("request/gettelegramlink", GetTelegramLinkRoute)
}

func testRoute(c *gin.Context) {
	// cryptowebsocket.SendDataToBroadcast(cryptowebsocket.PoolMap["BTC"], "BTC")
	// valu, _ := GetUSDTValueInINR("https://min-api.cryptocompare.com/data/price?fsym=USDT&tsyms=INR")
	valu, _ := cryptowebsocket.SetCoinDataToMap("BTC")
	c.JSON(http.StatusOK, valu)
	return

}

type UserId struct {
	Id string `json:"id"`
}
type User struct {
	UserId   string `json:"userId"`
	UserName string `json:"userName"`
}

// type TelegramLink struct {
// 	Key  string `json:"key"`
// 	Link string `json:"link"`
// }

// func GetTelegramLinkRoute(c *gin.Context) {
// 	log.Println("IN GetTelegramLinkRoute")
// 	tele := TelegramLink{}
// 	if err := c.Bind(&tele); err != nil {
// 		log.Println("Error in GetTelegramLinkRoute", err)
// 		c.JSON(http.StatusExpectationFailed, err)
// 		return
// 	}
// 	link, err := GetTelegramLinkDAO(tele.Key)
// 	if err != nil {
// 		c.JSON(http.StatusExpectationFailed, err)
// 		return
// 	}
// 	c.JSON(http.StatusOK, link)
// 	return

// }

func GetAllPlanRoute(c *gin.Context) {
	log.Println("IN GetAllPlanRoute")

	plans, err := GetAllPlanDAO()
	if err != nil {
		c.JSON(http.StatusExpectationFailed, err)
		return
	}
	c.JSON(http.StatusOK, plans)
	return
}

func GetAllTransitionOfUserRoute(c *gin.Context) {
	log.Println("IN GetAllTransitionOfUser")

	user := User{}

	if err := c.Bind(&user); err != nil {
		log.Println("Erorr in Bindin data", err)
		c.JSON(http.StatusExpectationFailed, err)
		return
	}
	if user.UserId == "" || user.UserName == "" {
		c.JSON(http.StatusExpectationFailed, "Required filed is missing")
		return
	}

	trans, err := GetAllTransitionOfUserService(user)

	if err != nil {
		c.JSON(http.StatusExpectationFailed, err)
		return
	}
	c.JSON(http.StatusOK, trans)
	return
}

func ValidateIdRoute(c *gin.Context) {
	log.Println("IN validate id")
	userId := UserId{}

	if err := c.Bind(&userId); err != nil {
		log.Println("Error in binding data ", err)
		c.JSON(http.StatusExpectationFailed, false)
		return
	}
	fmt.Println("isdd", userId)
	status, err := ValidateIdDAO(userId.Id)

	if err != nil {
		log.Println("Error in ValideDAO", err)
		c.JSON(http.StatusOK, false)
		return
	}
	c.JSON(http.StatusOK, status)
	return
}

func UserLoginRoute(c *gin.Context) {
	log.Println("IN UserLoginRoute")
	UserLoginDetails := request.UserLoginDetails{}

	if err := c.Bind(&UserLoginDetails); err != nil {
		log.Println("ERror in Data binding ", err)
		c.JSON(http.StatusExpectationFailed, err)
		return
	}
	if UserLoginDetails.Password == "" || UserLoginDetails.UserId == "" || UserLoginDetails.UserName == "" {
		c.JSON(http.StatusExpectationFailed, "Required payload is missing ")
		return
	}

	userDetails, err := UserLoginService(UserLoginDetails)

	if err != nil {
		log.Println("Error in user loaing service ", err)
		c.JSON(http.StatusExpectationFailed, err)
		return
	}
	c.JSON(http.StatusOK, userDetails)
	return

}

func GetCoinValueRoute(c *gin.Context) {
	log.Println("IN GetCoinValueRoute")
	BitCoinReq := request.Request{}
	if err := c.Bind(&BitCoinReq); err != nil {
		log.Println("Error : GetCoinCurrentValue  binding", err)
		c.JSON(http.StatusExpectationFailed, err)
		return
	}
	if BitCoinReq.CoinName == "" {
		c.JSON(http.StatusExpectationFailed, "Coin name is required")
		return
	}
	resp, err := GetCoinValueService(BitCoinReq)

	if err != nil {
		c.JSON(http.StatusOK, resp)
		return
	}

	c.JSON(http.StatusOK, resp)
	return
}
func GetCoinCurrentValueRoute(c *gin.Context) {
	log.Println("IN GetCoinCurrentValue")
	BitCoinReq := request.Request{}

	if err := c.Bind(&BitCoinReq); err != nil {
		log.Println("Error : GetCoinCurrentValue  binding", err)
		c.JSON(http.StatusExpectationFailed, err)
		return
	}
	if BitCoinReq.CoinName == "" {
		c.JSON(http.StatusExpectationFailed, "Coin name is required")
		return
	}

	resp, err := GetCoinCurrentValueService(BitCoinReq)

	if err != nil {
		c.JSON(http.StatusExpectationFailed, err)
		return
	}

	c.JSON(http.StatusOK, resp)
	return
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
	// resp, err := cronjob.StartCronForCoin("BTC")
	// if err != nil {
	// 	log.Println(err)
	// }
	// c.JSON(http.StatusOK, resp)
	// return
}

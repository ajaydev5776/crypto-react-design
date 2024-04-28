package admin

import (
	"fmt"
	"log"
	"net/http"
	"practice/project/crypto-react-design/Server/models/admin"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
)

func Init(o, r *gin.RouterGroup) {

	o.POST("/admin/addnewuser", addNewUserRoute)
	o.POST("/admin/login", adminLoginRoute)
	o.POST("/admin/getuserdetailbyphoneno", getUserDetailByPhoneNoRoute)
	o.GET("/admin/gettotalusers", GetTotalUsersRoute)
	o.POST("/admin/addcointouseraccount", AddCoinToUserAccountRoute)
	o.POST("/admin/updateTelegramLink", UpdateTelegramLinkRoute)
	o.POST("/admin/getTelegramLink", GetTelegramLinkRoute)
	o.POST("/admin/freezeaccounts", FreezeAccountsRoute)
}

type CreateUserRsp struct {
	UserId string `json:"userId"`
}

type UserPhone struct {
	PhoneNo string `json:"phoneNo"`
}
type AccountAction struct {
	Accounts []string `json:"accounts"`
	Action   string   `json:"action"`
}

//	type TelegramLink struct {
//		Key  string `json:"key" bson:"key"`
//		Link string `json:"link" bson:"link"`
//	}
func FreezeAccountsRoute(c *gin.Context) {
	log.Println("IN FreezAccountsRoute")
	Accounts := AccountAction{}
	if err := c.Bind(&Accounts); err != nil {
		log.Println("Error in Binding Data", err)
		c.JSON(http.StatusExpectationFailed, err)
		return
	}
	status, err := FreezAccountsDAO(Accounts)
	if err != nil {
		log.Println("Error in DAO ", err)
		c.JSON(http.StatusExpectationFailed, err)
		return
	}
	c.JSON(http.StatusOK, status)
}

func GetTelegramLinkRoute(c *gin.Context) {
	log.Println("IN GetTelegramLinkRoute")
	payload := admin.TelegramLink{}
	if err := c.Bind(&payload); err != nil {
		log.Println("Error in binding GetTelegramLinkRoute", err)
		c.JSON(http.StatusExpectationFailed, err)
		return
	}
	Link, err := GetTelegramLinkDAO(payload)
	if err != nil {
		log.Println("Error in GetTelegramLinkRoute ", err)
		c.JSON(http.StatusExpectationFailed, err)
		return
	}
	c.JSON(http.StatusOK, Link)
	return
}

func UpdateTelegramLinkRoute(c *gin.Context) {
	log.Println("IN UpdateTelegramLinkRoute")
	telegramlink := admin.TelegramLink{}
	if err := c.Bind(&telegramlink); err != nil {
		log.Println("Error in binding data", err)
		c.JSON(http.StatusExpectationFailed, err)
		return
	}

	statu, err := UpdateTelegramLinkService(telegramlink)
	if err != nil {
		log.Println("Error in UpdateTelegramLinkService", err)
		c.JSON(http.StatusExpectationFailed, err)
		return

	}
	c.JSON(http.StatusOK, statu)
	return

}

func AddCoinToUserAccountRoute(c *gin.Context) {
	log.Println("IN AddCoinToUserAccountRoute")
	userTran := admin.UserTransitions{}

	if err := c.Bind(&userTran); err != nil {
		log.Println("Eror in Binfin dat ain AddcoinRoute", err)
		c.JSON(http.StatusExpectationFailed, err)
		return
	}

	fmt.Println("objj", userTran)

	status, err := AddCoinToUserAccountService(userTran)
	if err != nil {
		log.Println("Erro in AddCoinToUserAccountService", err)
		c.JSON(http.StatusExpectationFailed, err)
		return
	}
	c.JSON(http.StatusOK, status)
	return

}

func GetTotalUsersRoute(c *gin.Context) {
	log.Println("IN GetTotalUsersRoute")

	users, err := GetTotalUserDAO()

	if err != nil {
		log.Println("Error in GetTotal user DAO")
		c.JSON(http.StatusExpectationFailed, err)
		return
	}

	c.JSON(http.StatusOK, users)
	return

}

func getUserDetailByPhoneNoRoute(c *gin.Context) {
	log.Println("IN getUserDetailByPhoneNoRoute")

	userPhone := UserPhone{}
	err := c.Bind(&userPhone)

	if err != nil {
		log.Println("Error in bining Data in getUserDetailByPhoneNoRoute", err)
		c.JSON(http.StatusExpectationFailed, err)
		return
	}
	if userPhone.PhoneNo == "" {
		c.JSON(http.StatusExpectationFailed, "Phone No is empty")
		return
	}

	userDetails, err := getUserDetailsByPhoneService(userPhone.PhoneNo)

	if err != nil {
		if err.Error() == mongo.ErrNoDocuments.Error() {
			c.JSON(http.StatusOK, "User Not Found")
			return
		}
		log.Println("Error in getUserDetailsByPhoneService", err)
		c.JSON(http.StatusInternalServerError, err)
		return
	}

	c.JSON(http.StatusOK, userDetails)
	return

}

func adminLoginRoute(c *gin.Context) {
	log.Println("IN Admin LoginRoute")
	loginDetails := admin.LoginDetails{}

	err := c.Bind(&loginDetails)
	if err != nil {
		log.Println("Error in binding data in admin login route", err)
		c.JSON(http.StatusInternalServerError, err.Error())
		return
	}

	if loginDetails.UserName == "" {
		c.JSON(http.StatusInternalServerError, "USername Should not empty")
		return
	} else if loginDetails.PassWord == "" {
		c.JSON(http.StatusInternalServerError, "password should not empty")
		return
	}

	status, err := AdminLoginService(loginDetails)

	if err != nil {
		log.Println("Error in Login service ", err)
		c.JSON(http.StatusInternalServerError, err.Error())
		return
	}
	c.JSON(http.StatusOK, status)

}
func addNewUserRoute(c *gin.Context) {
	log.Println("IN AddNewUSer")

	UserDetails := admin.UserDetails{}

	err := c.Bind(&UserDetails)
	if err != nil {
		log.Println("Error in Binding data", err)
		c.JSON(http.StatusExpectationFailed, err.Error())
		return
	}
	fmt.Println(UserDetails)
	if UserDetails.Password == "" {
		c.JSON(http.StatusExpectationFailed, "Password Should not empty")
		return
	} else if len(UserDetails.Password) < 8 {
		c.JSON(http.StatusExpectationFailed, "Password must have atleast 8 char")
		return
	} else if UserDetails.UserName == "" {
		c.JSON(http.StatusExpectationFailed, "USername Should not empty")
		return
	} else if UserDetails.PhoneNo == "" {
		c.JSON(http.StatusExpectationFailed, "phone Number  Should not empty")
		return
	} else if len(UserDetails.PhoneNo) < 10 {
		c.JSON(http.StatusExpectationFailed, "invalid phone no")
		return
	}

	userID, err := addNewUserService(UserDetails)

	if err != nil {
		log.Println("Error in addNewUserService", err.Error())
		c.JSON(http.StatusExpectationFailed, err.Error())
		return
	}
	c.JSON(http.StatusOK, CreateUserRsp{UserId: userID})
	return

}

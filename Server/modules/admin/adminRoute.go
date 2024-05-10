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
	o.POST("/admin/updateuserpassword", UpdateUserPassword)
	o.GET("/admin/getalltransitiondetails", GetAllTransitionDetailsRoute)
	o.POST("/admin/deletetrans", DeleteTransRoute)
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

type UpdateUserPass struct {
	PhoneNo  string `json:"phoneNo"`
	Password string `json:"password"`
}

//	type TelegramLink struct {
//		Key  string `json:"key" bson:"key"`
//		Link string `json:"link" bson:"link"`
//	}
type TranDetail struct {
	TransID string `json:"transId"`
}

func DeleteTransRoute(c *gin.Context) {
	log.Println("IN DeleteTransRoute")
	trandetail := TranDetail{}
	if err := c.Bind(&trandetail); err != nil {
		c.JSON(http.StatusExpectationFailed, err)
		return
	}
	status, err := DeleteTranDAO(trandetail)
	if err != nil {
		log.Println("Error in DAO", err)
		c.JSON(http.StatusExpectationFailed, err)
		return
	}
	c.JSON(http.StatusOK, status)
	return
}
func GetAllTransitionDetailsRoute(c *gin.Context) {
	log.Println("IN GetAllTransitionDetailsRoute")

	data, err := GetAllTransitionDetailsDAO()
	if err != nil {
		log.Println("Error in GetAllTransitionDetailsDAO", err)
		c.JSON(http.StatusExpectationFailed, err)
		return
	}
	c.JSON(http.StatusOK, data)
	return
}

func UpdateUserPassword(c *gin.Context) {
	log.Println("IN UpdateUserPassword")
	userDetails := UpdateUserPass{}
	upDatePssRes := AddUserRes{}

	if err := c.Bind(&userDetails); err != nil {
		log.Println("Error in binding data", err)
		c.JSON(http.StatusExpectationFailed, err.Error())
		return
	}
	status, err := UpdateUserPasswordService(userDetails)
	if err != nil {
		upDatePssRes.Status = false
		upDatePssRes.Error = err.Error()
		c.JSON(http.StatusOK, upDatePssRes)
		return
	}
	upDatePssRes.Status = status
	c.JSON(http.StatusOK, upDatePssRes)
	return
}

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

type AddUserRes struct {
	Status bool   `json:"status"`
	Error  string `json:"error"`
	UserId string `json:"userId"`
}

func addNewUserRoute(c *gin.Context) {
	log.Println("IN AddNewUSer")

	UserDetails := admin.UserDetails{}
	usrRsp := AddUserRes{}
	err := c.Bind(&UserDetails)
	if err != nil {
		log.Println("Error in Binding data", err)
		usrRsp.Status = false
		usrRsp.Error = err.Error()
		c.JSON(http.StatusOK, usrRsp)
		return
	}
	fmt.Println(UserDetails)
	if UserDetails.Password == "" {
		usrRsp.Status = false
		usrRsp.Error = "Password Should not empty"
		c.JSON(http.StatusOK, usrRsp)
		return
	} else if len(UserDetails.Password) < 8 {
		usrRsp.Status = false
		usrRsp.Error = "Password must have atleast 8 char"
		c.JSON(http.StatusOK, usrRsp)
		return
	} else if UserDetails.UserName == "" {
		usrRsp.Status = false
		usrRsp.Error = "USername Should not empty"
		c.JSON(http.StatusOK, usrRsp)
		return
	} else if UserDetails.PhoneNo == "" {

		usrRsp.Status = false
		usrRsp.Error = "phone Number  Should not empty"
		c.JSON(http.StatusOK, usrRsp)
		return
	} else if len(UserDetails.PhoneNo) < 10 {
		usrRsp.Status = false
		usrRsp.Error = "invalid phone no"
		c.JSON(http.StatusOK, usrRsp)
		return
	}

	userID, err := addNewUserService(UserDetails)

	if err != nil {
		log.Println("Error in addNewUserService", err.Error())
		usrRsp.Status = false
		usrRsp.Error = err.Error()
		c.JSON(http.StatusOK, usrRsp)
		return
	}
	usrRsp.Status = true
	usrRsp.Error = userID
	c.JSON(http.StatusOK, usrRsp)
	return

}

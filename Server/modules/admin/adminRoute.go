package admin

import (
	"fmt"
	"log"
	"net/http"
	"practice/project/crypto-react-design/Server/models/admin"

	"github.com/gin-gonic/gin"
)

func Init(o, r *gin.RouterGroup) {

	o.POST("/admin/addnewuser", addNewUserRoute)
}

type CreateUserRsp struct {
	UserId string `json:"userId"`
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

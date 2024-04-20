package api

import (
	"os"
	"practice/project/crypto-react-design/Server/modules/admin"
	"practice/project/crypto-react-design/Server/modules/cryptowebsocket"
	"practice/project/crypto-react-design/Server/modules/request"

	jwt "github.com/gin-gonic/contrib/jwt"
	"github.com/gin-gonic/gin"
)

func Init(router *gin.Engine) {
	r := router.Group("/r")
	JwtKey := os.Getenv("JWTKEY")
	r.Use(jwt.Auth(JwtKey))
	o := router.Group("/o")
	request.Init(o, r)
	cryptowebsocket.Init(o, r)
	admin.Init(o, r)

	// config := cors.Config{
	// 	AllowAllOrigins: true,
	// 	// AllowOrigins:    []string{"http://localhost", "http://localhost:3000"},
	// 	AllowMethods: []string{"POST", "GET", "PUT", "DELETE"},
	// 	AllowHeaders: []string{"Content-Type", "Authorization", "Access-Control-Allow-Origin"},
	// }
	// router.Use(cors.New(config))
}

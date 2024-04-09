package api

import (
	"os"
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
}

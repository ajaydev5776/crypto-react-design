package admin

import (
	"log"
	"practice/project/crypto-react-design/Server/models/admin"
)

func addNewUserService(UserDetails admin.UserDetails) (string, error) {

	log.Println("IN addNewUserService")

	UserId, err := addNewUserDAO(UserDetails)

	return UserId, err
}

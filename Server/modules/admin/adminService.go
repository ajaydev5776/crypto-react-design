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

func AdminLoginService(loginDetails admin.LoginDetails) (bool, error) {
	log.Println("IN AdminLoginService")

	status, err := AdminLoginDAO(loginDetails)

	return status, err
}

func getUserDetailsByPhoneService(phoneNo string) (admin.UserDetailswithoutPass, error) {
	log.Println("IN getUserDetailsByPhoneService")

	UserId, err := getUserDetailsByPhoneDAO(phoneNo)

	return UserId, err
}

func AddCoinToUserAccountService(userTran admin.UserTransitions) (bool, error) {
	log.Println("IN serviec")

	status, err := AddCoinToUserAccountDAO(userTran)

	return status, err
}

func UpdateTelegramLinkService(linkObj admin.TelegramLink) (bool, error) {
	log.Println("IN serviec")

	status, err := UpdateTelegramLinkDAO(linkObj)

	return status, err
}

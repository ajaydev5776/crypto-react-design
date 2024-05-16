package admin

import (
	"log"
	"practice/project/crypto-react-design/Server/models/admin"
	"strconv"
)

func GetTotalMoneyService() (int, error) {

	log.Println("IN GetTotalMoneyService")
	AllTran, err := GetAllTransitionDetailsDAO()
	if err != nil {
		return 0, err
	}
	totalMoney := 0
	for i := 0; i < len(AllTran); i++ {
		if !AllTran[i].IsDeleted {
			temp, err := strconv.Atoi(AllTran[i].InvestedAmount)
			if err != nil {
				continue
			}
			totalMoney = totalMoney + temp
		}
	}
	return totalMoney, err
}

func UpdateUserPasswordService(UserDetails UpdateUserPass) (bool, error) {

	log.Println("IN addNewUserService")

	status, err := UpdateUserPasswordDAO(UserDetails)

	return status, err
}

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

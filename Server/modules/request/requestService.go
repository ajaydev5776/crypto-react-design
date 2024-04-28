package request

import (
	"log"
	"practice/project/crypto-react-design/Server/models/admin"
	"practice/project/crypto-react-design/Server/models/request"
	"time"
)

func GetAllTransitionOfUserService(user User) ([]admin.UserTransitions, error) {
	userTrans, err := GetAllTransitionOfUserDAO(user)
	if err != nil {
		log.Println("Error in GetAllTransitionOfUserDAO ", err)
		return userTrans, err
	}
	return userTrans, nil
}

func UserLoginService(user request.UserLoginDetails) (admin.UserDetailswithoutPass, error) {
	userDetails, err := UserLoginDAO(user)
	if err != nil {
		log.Println("Error in UserLaoignDAO ", err)
		return userDetails, err
	}
	return userDetails, err
}

func GetCoinCurrentValueService(BitCoinReq request.Request) (float64, error) {
	currentTime := time.Now().Unix()
	coinValue, err := GetCoinCurrentValueDAO(BitCoinReq.CoinName, currentTime)

	if err != nil {
		return float64(0), err
	}
	return coinValue, err

}

func GetBitCoinPriceService(BitCoinReq request.Request) ([]request.ApiDetails, error) {
	noOfRecord, err := GetBitCoinPriceDAO(BitCoinReq)
	if err != nil {
		log.Println("Error in GetBitCoinPriceDAO ", err)
		return []request.ApiDetails{}, err
	}
	return noOfRecord, nil
}

func GetNext24HoursData(BitCoinReq request.Request) (int, error) {
	noOfRecord, err := GetNext24HoursPriceDAO(BitCoinReq)
	if err != nil {
		log.Println("Error in GetBitCoinPriceDAO ", err)
		return 0, err
	}
	return noOfRecord, nil
}

func GetPreviousDataService(payload request.PreviousDataRequest) ([]request.BitCoinTimeWiseData, error) {

	previousData, err := GetPreviousDataDAO(payload)

	if err != nil {
		log.Println("Error in GetPreviousDataDAO ", err)
		return []request.BitCoinTimeWiseData{}, err
	}
	return previousData, nil

}

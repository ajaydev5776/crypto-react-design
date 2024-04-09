package request

import (
	"log"
	"practice/project/crypto-react-design/Server/models/request"
)

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

package cronjob

import (
	"errors"
	"log"
	cronjob "practice/project/crypto-react-design/Server/models/cron"
	requestmodel "practice/project/crypto-react-design/Server/models/request"
	"practice/project/crypto-react-design/Server/modules/request"

	// "practice/project/crypto-react-design/Server/modules/request"
	"time"

	"github.com/robfig/cron"
)

// func Init(o, r *gin.RouterGroup) {
// 	o.POST("cron/startcronjob", StartCronJobRoute)
// }

var AllCrons = make(map[string]cronjob.CronDetails)

func StartCronForCoin(coinName string) (cronjob.CronDetails, error) {

	cronDetails, ok := AllCrons[coinName]

	if ok && cronDetails.IsRunning {
		return cronDetails, errors.New("Corn For " + coinName + " is Already running")
	}

	cronDetails = cronjob.CronDetails{IsRunning: true, CoinName: coinName, StartedOn: time.Now().String()}
	log.Println("in StartCronForCoin")

	AllCrons[coinName] = cronDetails

	c := cron.New()
	Name := requestmodel.Request{}
	Name.CoinName = coinName
	c.AddFunc("59 * * * *", func() { request.GetNextHourDataDAO(Name) })
	// c.AddFunc("*/1 * * * *", func() { cryptowebsocket.SendDataToBroadcast(cryptowebsocket.PoolMap[coinName], coinName) })
	// c.AddFunc("@every 30s", func() { cryptowebsocket.SendDataToBroadcast(cryptowebsocket.PoolMap[coinName], coinName) })

	c.Start()
	request.GetNextHourDataDAO(Name)
	return cronDetails, nil
}

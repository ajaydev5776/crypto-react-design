package cronjob

import (
	"errors"
	"log"
	cronjob "practice/project/crypto-react-design/Server/models/cron"
	"practice/project/crypto-react-design/Server/modules/cryptowebsocket"
	"time"

	"github.com/robfig/cron"
)

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

	// c.AddFunc("*/1 * * * *", func() { fmt.Println("Call data from db and send to websocket") })
	c.AddFunc("@every 30s", func() { cryptowebsocket.SendDataToBroadcast(cryptowebsocket.PoolMap["BTC"], "BTC") })

	c.Start()

	return cronDetails, nil
}

package cronjob

type CronDetails struct {
	CoinName  string `josn:"CoinName"`
	StartedOn string `josn:"startedOn"`
	IsRunning bool   `json:"isRunning"`
}

package request

type Request struct {
	CoinName string `json:"coinName" bson:"coinName"`
}
type ApiDetails struct {
	Url              string `json:"url" bson:"url"`
	Method           string `json:"method" bson:"method"`
	Payload          string `json:"payload" bson:"payload"`
	QueryParams      string `json:"queryParams" bson:"queryParams"`
	Api_Key          string `json:"api_Key" bson:"api_Key"`
	AllowedHitPerMin int    `json:"allowedHitPerMin" bson:"allowedHitPerMin"`
	TotalHitTilNow   int    `json:"totalHitTilNow" bson:"totalHitTilNow"`
	LastHitTime      string `json:"lastHitTime" bson:"lastHitTime"`
	LastMinHitCount  int    `json:"lastMinHitCount" bson:"lastMinHitCount"`
	ApiDocLink       string `json:"apiDocLink" bson:"apiDocLink"`
	ApiFor           string `json:"apiFor" bson:"apiFor"`
	CoinName         string `json:"coinName" bson:"coinName"`
}

type BitCoinDataFromApi struct {
	Response   string      `json:"Response"`
	Message    string      `json:"Message"`
	HasWarning bool        `json:"HasWarning"`
	Type       int         `json:"Type"`
	Data       BitCoinData `json:"Data"`
}

type BitCoinData struct {
	Aggregated bool                  `json:"Aggregated" bson:"Aggregated"`
	TimeFrom   int64                 `json:"TimeFrom" bson:"TimeFrom"`
	TimeTo     int64                 `json:"TimeTo" bson:"TimeTo"`
	Data       []BitCoinTimeWiseData `json:"Data" bson:"Data"`
	CoinName   string                `json:"coinName" bson:"coinName"`
}

type BitCoinTimeWiseData struct {
	Time             int64   `json:"time" bson:"time"`
	High             float64 `json:"high" bson:"high"`
	Low              float64 `json:"low" bson:"low"`
	Open             float64 `json:"open" bson:"open"`
	VolumeFrom       float64 `json:"volumefrom" bson:"volumefrom"`
	VolumeTo         float64 `json:"volumeto" bson:"volumeto"`
	Close            float64 `json:"close" bson:"close"`
	ConversionType   string  `json:"conversionType" bson:"conversionType"`
	ConversionSymbol string  `json:"conversionSymbol" bson:"conversionSymbol"`
}

type PreviousDataRequest struct {
	CoinName         string  `json:"coinName"`
	CurrentTime      int64   `json:"currentTime"`
	BeforeTimeInHour float64 `json:"beforeTimeInHour"`
}

package admin

type UserDetails struct {
	UserId        string `json:"userId" bson:"userId"`
	UserName      string `json:"userName" bson:"userName" validate:"required"`
	PhoneNo       string `json:"phoneNo" bson:"phoneNo" validate:"required"`
	Password      string `json:"password" bson:"password" validate:"required"`
	CreatedOn     string `json:"createdOn" bson:"createdOn"`
	AccountStatus string `json:"accountStatus" bson:"accountStatus"`
}

type UserDetailswithoutPass struct {
	UserId        string `json:"userId" bson:"userId"`
	UserName      string `json:"userName" bson:"userName" validate:"required"`
	PhoneNo       string `json:"phoneNo" bson:"phoneNo" validate:"required"`
	CreatedOn     string `json:"createdOn" bson:"createdOn"`
	AccountStatus string `json:"accountStatus" bson:"accountStatus"`
}

type LoginDetails struct {
	UserName string `json:"userName" bson:"userName"`
	PassWord string `json:"passWord" bson:"passWord"`
}

type UserTransitions struct {
	UserId         string  `josn:"userId" bson:"userId"`
	UserName       string  `josn:"userName" bson:"userName"`
	CoinName       string  `json:"coinName" bson:"coinName"`
	BuyAtValue     float32 `json:"buyAtValue" bson:"buyAtValue"`
	InvestedAmount string  `json:"investedAmount" bson:"investedAmount"`
	CoinAvailable  float32 `json:"coinAvailable" bson:"coinAvailable"`
	InvestedDate   string  `json:"investedDate" bson:"investedDate"`
}

type TelegramLink struct {
	Key  string `json:"key" bson:"key"`
	Link string `json:"link" bson:"link"`
}

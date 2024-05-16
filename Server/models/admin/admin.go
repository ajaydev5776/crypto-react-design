package admin

import "go.mongodb.org/mongo-driver/bson/primitive"

type UserDetails struct {
	UserId        string `json:"userId" bson:"userId"`
	UserName      string `json:"userName" bson:"userName" validate:"required"`
	PhoneNo       string `json:"phoneNo" bson:"phoneNo" validate:"required"`
	Password      string `json:"password" bson:"password" validate:"required"`
	CreatedOn     string `json:"createdOn" bson:"createdOn"`
	AccountStatus string `json:"accountStatus" bson:"accountStatus"`
	AmountToShow  int    `json:"amountToShow" bson:"amountToShow"`
	IsPlanBuy     string `json:"isPlanBuy" bson:"isPlanBuy"`
}

type UserDetailswithoutPass struct {
	UserId        string `json:"userId" bson:"userId"`
	UserName      string `json:"userName" bson:"userName" validate:"required"`
	PhoneNo       string `json:"phoneNo" bson:"phoneNo" validate:"required"`
	CreatedOn     string `json:"createdOn" bson:"createdOn"`
	AccountStatus string `json:"accountStatus" bson:"accountStatus"`
	AmountToShow  int    `json:"amountToShow" bson:"amountToShow"`
	IsPlanBuy     string `json:"isPlanBuy" bson:"isPlanBuy"`
}

type LoginDetails struct {
	UserName string `json:"userName" bson:"userName"`
	PassWord string `json:"passWord" bson:"passWord"`
}

type UserTransitions struct {
	TransId        primitive.ObjectID `json:"transId,omitempty" bson:"_id,omitempty"`
	UserId         string             `json:"userId" bson:"userId"`
	UserName       string             `json:"userName" bson:"userName"`
	CoinName       string             `json:"coinName" bson:"coinName"`
	PhoneNo        string             `json:"phoneNo" bson:"phoneNo"`
	BuyAtValue     float64            `json:"buyAtValue" bson:"buyAtValue"`
	InvestedAmount string             `json:"investedAmount" bson:"investedAmount"`
	CoinAvailable  float64            `json:"coinAvailable" bson:"coinAvailable"`
	InvestedDate   string             `json:"investedDate" bson:"investedDate"`
	IsDeleted      bool               `json:"isDeleted" bson:"isDeleted"`
}

type TelegramLink struct {
	Key  string `json:"key" bson:"key"`
	Link string `json:"link" bson:"link"`
}

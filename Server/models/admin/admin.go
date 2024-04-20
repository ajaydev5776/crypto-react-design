package admin

type UserDetails struct {
	UserId    string `json:"userId" bson:"userId"`
	UserName  string `json:"userName" bson:"userName" validate:"required"`
	PhoneNo   string `json:"phoneNo" bson:"phoneNo" validate:"required"`
	Password  string `json:"password" bson:"password" validate:"required"`
	CreatedOn string `json:"createdOn bson:"createdOn"`
}

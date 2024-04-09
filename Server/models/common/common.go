package models

import jwt "github.com/golang-jwt/jwt"

type JwtOtherAppClaims struct {
	jwt.StandardClaims
}

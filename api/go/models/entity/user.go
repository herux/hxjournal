package entity

import (
	"fmt"
	"hxjournal/api/utils"

	"log"
	"time"

	"github.com/dgrijalva/jwt-go"
)

// User struct is to handle user data
type User struct {
	BaseModel
	Email      string
	Password   string
	Name       string
	Verified   bool
	VerifiedAt *time.Time
}

// GetJwtToken returns jwt token with user email claims
func (user *User) GetJwtToken() (string, error) {
	fmt.Println("jwt token email is : ", user.Email)
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"email": string(user.Email),
	})
	log.Println(token)

	secretKey := utils.EnvVar("HX_TOKEN_KEY")
	log.Println(secretKey)
	tokenString, err := token.SignedString([]byte(secretKey))
	log.Println(tokenString, err)
	return tokenString, err
}

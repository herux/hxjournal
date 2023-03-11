package service

import (
	"errors"
	"fmt"
	"hxjournal/api/models/entity"
)

// Userservice is to handle user relation db query
type Userservice struct {
	BaseService
}

// Create is to register new user
func (userservice *Userservice) Create(user *(entity.User)) error {
	fmt.Println("user: ", user, userservice)
	result := userservice.postgresDb.Where("email = ?", user.Email).Find(user)
	fmt.Println("result: ", result)
	if result.RowsAffected > 0 {
		return errors.New("email already Exist")
	}

	result = userservice.postgresDb.Create(&user)
	if result.RowsAffected != 1 {
		return errors.New(result.Error.Error())
	}

	return nil
}

// Find user
func (userservice *Userservice) Find(user *(entity.User)) (*entity.User, error) {
	// doc := mogo.NewDoc(entity.User{}).(*(entity.User))
	// err := doc.FindOne(bson.M{"email": user.Email}, doc)

	// if err != nil {
	// 	return nil, err
	// }
	// return doc, nil
	return nil, nil
}

// Find user from email
func (userservice *Userservice) FindByEmail(email string) (*entity.User, error) {
	// user := new(entity.User)
	// user.Email = email
	// return userservice.Find(user)
	return nil, nil
}

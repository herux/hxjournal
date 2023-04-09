package service

import (
	"errors"
	"hxjournal/api/models/entity"
)

// Userservice is to handle user relation db query
type UserService struct {
	BaseService
}

func (svc *UserService) initService() {
}

// Create is to register new user
func (svc *UserService) Create(user *(entity.User)) error {
	result := svc.PostgresDb.Where("email = ?", user.Email).Find(user)
	if result.RowsAffected > 0 {
		return errors.New("email already Exist")
	}

	result = svc.PostgresDb.Create(&user)
	if result.RowsAffected != 1 {
		return errors.New(result.Error.Error())
	}

	return nil
}

// Find user
func (svc *UserService) Find(user *(entity.User)) (*entity.User, error) {
	// doc := mogo.NewDoc(entity.User{}).(*(entity.User))
	// err := doc.FindOne(bson.M{"email": user.Email}, doc)

	// if err != nil {
	// 	return nil, err
	// }
	// return doc, nil
	return nil, nil
}

// Find user from email
func (svc *UserService) FindByEmail(email string) (*entity.User, error) {
	// user := new(entity.User)
	// user.Email = email
	// return userservice.Find(user)
	return nil, nil
}

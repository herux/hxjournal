package service

import (
	"errors"
	"fmt"
	"hxjournal/api/models/db"
	"hxjournal/api/models/entity"
	"reflect"

	"github.com/goonode/mogo"
	"gorm.io/gorm"
)

// type IBaseService interface {
// 	initService()
// }

type BaseService struct {
	mongoDb    *mogo.Connection
	PostgresDb *gorm.DB
}

func (svc *BaseService) getAttribute(model entity.IBaseModel, fieldName string) (reflect.Value, error) {
	strct := reflect.ValueOf(model)
	fieldStrct := strct.Elem()
	if fieldStrct.Kind() != reflect.Struct {
		return reflect.Value{}, errors.New("Is not struct")
	}
	resultField := fieldStrct.FieldByName(fieldName)
	if !resultField.IsValid() {
		return reflect.Value{}, errors.New(fieldName + " not found")
	}
	return resultField, nil
}

func (svc *BaseService) ifExist(model entity.IBaseModel, fieldName string) bool {
	valStrc, err := svc.getAttribute(model, fieldName)
	fmt.Println(valStrc, err)
	// result := svc.postgresDb.Where(fieldName+" = ?", user.Email).Find(user)
	// if result.RowsAffected > 0 {
	// 	return false
	// }
	return true
}

// initialization for all service descendants
func InitService() *BaseService {
	postgresDb := db.GetPSQLConnection()
	return &BaseService{
		PostgresDb: postgresDb,
	}
}

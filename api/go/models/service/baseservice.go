package service

import (
	"hxjournal/api/models/db"

	"github.com/goonode/mogo"
	"gorm.io/gorm"
)

type BaseService struct {
	mongoDbConn    *mogo.Connection
	postgresDbConn *gorm.DB
}

func InitService() *BaseService {
	postgresDbConn := db.GetPSQLConnection()

	return &BaseService{
		postgresDbConn: postgresDbConn,
	}
}

package service

import (
	"hxjournal/api/models/db"

	"github.com/goonode/mogo"
	"gorm.io/gorm"
)

type BaseService struct {
	mongoDb    *mogo.Connection
	postgresDb *gorm.DB
}

func InitService() *BaseService {
	postgresDb := db.GetPSQLConnection()

	return &BaseService{
		postgresDb: postgresDb,
	}
}

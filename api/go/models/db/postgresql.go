package db

import (
	"hxjournal/api/utils"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func GetPSQLConnection() *gorm.DB {
	dsn := utils.EnvVar("HX_DB_CONNECTION_STRING")
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	return db
}

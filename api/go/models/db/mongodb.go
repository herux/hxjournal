package db

import (
	"hxjournal/api/utils"
	"log"

	"github.com/goonode/mogo"
)

var mongoConnection *mogo.Connection = nil

// get connection object for mongodb
func GetConnection() *mogo.Connection {
	if mongoConnection == nil {
		connectionString := utils.EnvVar("HX_DB_CONNECTION_STRING")
		dbName := utils.EnvVar("HX_DB_NAME")
		config := &mogo.Config{
			ConnectionString: connectionString,
			Database:         dbName,
		}
		mongoConnection, err := mogo.Connect(config)
		if err != nil {
			log.Fatal(err)
		} else {
			return mongoConnection
		}
	}
	return mongoConnection
}

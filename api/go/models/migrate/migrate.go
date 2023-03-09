package migrate

import (
	"hxjournal/api/models/db"
	"hxjournal/api/models/entity"
)

func ExecMigrate() {
	conn := db.GetPSQLConnection()
	conn.AutoMigrate(&entity.User{})
}

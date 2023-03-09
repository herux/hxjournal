package main

import (
	"hxjournal/api/models/migrate"
	"hxjournal/api/routers"
)

func main() {
	migrate.ExecMigrate()

	var router = routers.InitRoute()
	router.Run()
}

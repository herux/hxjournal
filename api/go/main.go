package main

import (
	"hxjournal/api/models/migrate"
	"hxjournal/api/models/service"
	"hxjournal/api/routers"
)

func main() {
	migrate.ExecMigrate()
	svc := service.InitService()
	var app = routers.InitRoute(svc)
	app.Run()
}

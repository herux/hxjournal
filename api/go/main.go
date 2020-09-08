package main

import (
	"hxjournal/api/routers"
)

func main() {
	var router = routers.InitRoute()
	router.Run()
}

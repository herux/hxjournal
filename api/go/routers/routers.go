package routers

import (
	"hxjournal/api/controllers"
	"hxjournal/api/models/service"
	"net/http"

	"github.com/gin-gonic/gin"
)

func setTestRoute(router *gin.Engine) {
	router.GET("/test", func(context *gin.Context) {
		context.JSON(
			http.StatusOK,
			gin.H{"test": "test bro"})
	})
}

func InitRoute(svc *service.BaseService) *gin.Engine {
	router := gin.New()
	router.Use(gin.Logger())
	router.Use(gin.Recovery())

	majorController := &controllers.MajorController{}
	majorController.Svc = svc
	controllers.Controller.Register(majorController)

	authController := &controllers.AuthController{}
	authController.Svc = svc
	controllers.Controller.Register(authController)

	controllers.Controller.Execute(router)

	setTestRoute(router)

	return router
}

package routers

import (
	"hxjournal/api/controllers"
	"net/http"

	"github.com/gin-gonic/gin"
)

func setAuthRoute(router *gin.Engine) {
	authController := new(controllers.AuthController)
	router.POST("/login", authController.Login)
	router.POST("/signup", authController.Signup)
	authGroup := router.Group("/")
	// authGroup.Use(middlewares.Authentication())
	authGroup.GET("/profile", authController.Profile)
}

func setTestRoute(router *gin.Engine) {
	router.GET("/test", func(context *gin.Context) {
		context.JSON(
			http.StatusOK,
			gin.H{"test": "test bro"})
	})
}

func InitRoute() *gin.Engine {
	router := gin.New()
	router.Use(gin.Logger())
	router.Use(gin.Recovery())
	setAuthRoute(router)
	setTestRoute(router)

	return router
}

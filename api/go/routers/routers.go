package routers

import (
	"hxjournal/api/controllers"
	"hxjournal/api/models/service"
	"net/http"

	"github.com/gin-contrib/cors"
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
	// router := gin.Default()
	// config := cors.DefaultConfig()
	// config.AllowOrigins = []string{"http://localhost:4200/"}
	// app.Use(cors.New(config))
	router.Use(cors.Default())
	router.Use(gin.Logger())
	router.Use(gin.Recovery())

	// major
	majorController := &controllers.MajorController{}
	majorController.Svc = svc
	controllers.Controller.Register(majorController)

	// authentication
	authController := &controllers.AuthController{}
	authController.Svc = svc
	controllers.Controller.Register(authController)

	// student
	studentController := &controllers.StudentController{}
	studentController.Svc = svc
	controllers.Controller.Register(studentController)

	// payment
	paymentController := &controllers.PaymentController{}
	paymentController.Svc = svc
	controllers.Controller.Register(paymentController)

	// journal
	journalController := &controllers.JournalController{}
	journalController.Svc = svc
	controllers.Controller.Register(journalController)

	// setup endpoint
	controllers.Controller.Execute(router)

	setTestRoute(router)

	return router
}

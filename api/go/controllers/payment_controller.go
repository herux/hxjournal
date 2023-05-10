package controllers

import (
	"github.com/gin-gonic/gin"
)

type PaymentController struct {
	BaseController
}

func (c *PaymentController) Handle(router *gin.Engine) {
	studentGroup := router.Group("/payment")
	studentGroup.GET("/list", c.List)
}

func (c *PaymentController) List(ctx *gin.Context) {
	// studenPaymentService := service.StudentPaymentService{}
	// studenPaymentService.PostgresDb = c.Svc.PostgresDb
	// pagination := utils.InitPagination(ctx)
	// result, err := studenPaymentService.List(*pagination)
	// if err != nil {
	// 	c.Response(nil, 500, false, err.Error(), ctx)
	// 	return
	// }
	// c.Response(result, 200, true, "success", ctx)
}

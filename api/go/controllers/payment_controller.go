package controllers

import "github.com/gin-gonic/gin"

type PaymentController struct {
	BaseController
}

func (c *PaymentController) Handle(router *gin.Engine) {
	studentGroup := router.Group("/payment")
	studentGroup.GET("/list", c.List)
}

func (c *PaymentController) List(ctx *gin.Context) {

}

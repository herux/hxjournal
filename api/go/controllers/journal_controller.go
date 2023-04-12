package controllers

import "github.com/gin-gonic/gin"

type JournalController struct {
	BaseController
}

func (c *JournalController) Handle(router *gin.Engine) {
	studentGroup := router.Group("/journal")
	studentGroup.GET("/list", c.List)
}

func (c *JournalController) List(ctx *gin.Context) {

}

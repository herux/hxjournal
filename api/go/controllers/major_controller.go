package controllers

import (
	"hxjournal/api/models/service"
	"hxjournal/api/utils"

	"github.com/gin-gonic/gin"
)

type MajorController struct {
	BaseController
}

func (c *MajorController) Handle(router *gin.Engine) {
	majorGroup := router.Group("/major")
	majorGroup.GET("/list", c.List)
}

func (c *MajorController) List(ctx *gin.Context) {
	majorService := service.MajorService{}
	majorService.PostgresDb = c.Svc.PostgresDb
	pagination := utils.InitPagination(ctx)
	result, err := majorService.List(*pagination)
	if err != nil {
		ctx.JSON(500, gin.H{"error": err.Error()})
		return
	}
	ctx.JSON(200, result)
}

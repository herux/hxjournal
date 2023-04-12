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
		c.Response(nil, 500, false, err.Error(), ctx)
		return
	}
	c.Response(result, 200, true, "success", ctx)
}

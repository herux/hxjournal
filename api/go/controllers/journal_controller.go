package controllers

import (
	"hxjournal/api/models/service"
	"hxjournal/api/utils"

	"github.com/gin-gonic/gin"
)

type JournalController struct {
	BaseController
}

func (c *JournalController) Handle(router *gin.Engine) {
	studentGroup := router.Group("/journal")
	studentGroup.GET("/list", c.List)
}

func (c *JournalController) List(ctx *gin.Context) {
	journalService := service.JournalService{}
	journalService.PostgresDb = c.Svc.PostgresDb
	pagination := utils.InitPagination(ctx)
	result, err := journalService.List(*pagination)
	if err != nil {
		c.Response(nil, 500, false, err.Error(), ctx)
		return
	}
	c.Response(result, 200, true, "success", ctx)
}

package controllers

import (
	"hxjournal/api/models/service"

	"github.com/gin-gonic/gin"
)

type BaseController struct {
	Svc *service.BaseService
}

func (*BaseController) Response(data interface{}, code int, result bool, message string, ctx *gin.Context) {
	ctx.JSON(code, gin.H{"m": message, "r": result, "d": data})
}

var Controller controller

type handlerController interface {
	Handle(router *gin.Engine)
}

type controller struct {
	handlers []handlerController
}

func (c *controller) Register(handler handlerController) {
	c.handlers = append(c.handlers, handler)
}

func (c *controller) Execute(router *gin.Engine) {
	for _, handler := range c.handlers {
		handler.Handle(router)
	}
}

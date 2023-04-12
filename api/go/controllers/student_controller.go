package controllers

import (
	"hxjournal/api/models/entity"
	"hxjournal/api/models/service"
	"hxjournal/api/utils"

	"github.com/gin-gonic/gin"
)

type StudentController struct {
	BaseController
}

func (c *StudentController) Handle(router *gin.Engine) {
	studentGroup := router.Group("/student")
	studentGroup.GET("/list", c.List)
	studentGroup.POST("/register", c.Add)
}

func (c *StudentController) List(ctx *gin.Context) {
	studentService := service.StudentService{}
	studentService.PostgresDb = c.Svc.PostgresDb
	pagination := utils.InitPagination(ctx)
	result, err := studentService.List(*pagination)
	if err != nil {
		c.Response(nil, 500, false, err.Error(), ctx)
		return
	}
	c.Response(result, 200, true, "success", ctx)
}

func (c *StudentController) Add(ctx *gin.Context) {
	var student entity.Student
	if err := ctx.ShouldBindJSON(&student); err != nil {
		c.Response(nil, 400, false, err.Error(), ctx)
		return
	}

	studentService := service.StudentService{}
	studentService.PostgresDb = c.Svc.PostgresDb
	err := studentService.Add(&student)
	if err != nil {
		c.Response(nil, 400, false, err.Error(), ctx)
		return
	}
	c.Response(student, 200, true, "success", ctx)
}

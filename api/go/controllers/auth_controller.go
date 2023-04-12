package controllers

import (
	"hxjournal/api/models/entity"
	"hxjournal/api/models/service"
	"log"

	"github.com/gin-gonic/gin"

	"golang.org/x/crypto/bcrypt"
)

// AuthController is for auth logic
type AuthController struct {
	BaseController
}

func (auth *AuthController) Handle(router *gin.Engine) {
	authGroup := router.Group("/users")
	authGroup.POST("/login", auth.Login)
	authGroup.POST("/signup", auth.Signup)
	authGroup.GET("/profile", auth.Profile)
}

// Login is to process login request
func (auth *AuthController) Login(c *gin.Context) {

	var loginInfo entity.User
	if err := c.ShouldBindJSON(&loginInfo); err != nil {
		auth.Response(nil, 400, false, err.Error(), c)
		return
	}
	//TODO
	userservice := service.UserService{}
	user, errf := userservice.Find(&loginInfo)
	if errf != nil {
		auth.Response(nil, 400, false, "Not found", c)
		return
	}

	err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(loginInfo.Password))
	if err != nil {
		auth.Response(nil, 402, false, "Email or password is invalid.", c)
		return
	}

	token, err := user.GetJwtToken()
	if err != nil {
		auth.Response(nil, 500, false, err.Error(), c)
		return
	}

	auth.Response(gin.H{
		"token": token,
	}, 200, false, "success", c)
}

// Profile is to provide current user info
func (auth *AuthController) Profile(c *gin.Context) {
	user := c.MustGet("user").(*(entity.User))

	c.JSON(200, gin.H{
		"user_name": user.Name,
		"email":     user.Email,
	})
}

// Signup is for user signup
func (auth *AuthController) Signup(c *gin.Context) {
	type signupInfo struct {
		Email    string `json:"email" binding:"required"`
		Password string `json:"password" binding:"required"`
		Name     string `json:"name"`
	}
	var info signupInfo
	if err := c.ShouldBindJSON(&info); err != nil {
		c.JSON(401, gin.H{"error": "Please input all fields"})
		return
	}
	user := entity.User{}
	user.Email = info.Email
	hash, err := bcrypt.GenerateFromPassword([]byte(info.Password), bcrypt.MinCost)
	if err != nil {
		log.Fatal(err)
		return
	}
	user.Password = string(hash)
	user.Name = info.Name
	// userservice := service.UserService{
	// 	BaseService: *service.InitService(),
	// }
	// err = userservice.Create(&user)
	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}
	c.JSON(200, gin.H{"result": "ok"})
}

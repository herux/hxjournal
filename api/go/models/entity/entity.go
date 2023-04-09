package entity

import "gorm.io/gorm"

type IBaseModel interface {
	Create()
}

type BaseModel struct {
	gorm.Model
}

func (mdl *BaseModel) Create() {

}

package service

import (
	"errors"
	"fmt"
	"hxjournal/api/models/entity"
	"hxjournal/api/utils"
)

type StudentService struct {
	BaseService
}

func (svc *StudentService) List(pagination utils.Pagination) (*utils.Pagination, error) {
	var students []*entity.Student
	fmt.Println("pagination: ", pagination.Limit)
	svc.PostgresDb.Scopes(utils.Paginate(students, &pagination, svc.PostgresDb)).Find(&students)
	pagination.Rows = students
	return &pagination, nil
}

func (svc *StudentService) Add(student *entity.Student) error {
	// result := svc.PostgresDb.Where("email = ?", student.Email).Find(user)
	// if result.RowsAffected > 0 {
	// 	return errors.New("email already Exist")
	// }

	result := svc.PostgresDb.Create(&student)
	if result.RowsAffected != 1 {
		return errors.New(result.Error.Error())
	}

	return nil
}

package service

import (
	"hxjournal/api/models/entity"
	"hxjournal/api/utils"
)

type MajorService struct {
	BaseService
}

func (svc *MajorService) Create(major *entity.Major) {
	if svc.ifExist(major, "name") {
		major.Create()
	}
}

func (svc *MajorService) List(pagination utils.Pagination) (*utils.Pagination, error) {
	var majors []*entity.Major
	svc.PostgresDb.Scopes(utils.Paginate(majors, &pagination, svc.PostgresDb)).Find(&majors)
	pagination.Rows = majors
	return &pagination, nil
}

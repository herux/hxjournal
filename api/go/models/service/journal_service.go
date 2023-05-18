package service

import (
	"fmt"
	"hxjournal/api/models/entity"
	"hxjournal/api/utils"
)

type JournalService struct {
	BaseService
}

func (svc *JournalService) List(pagination utils.Pagination) (*utils.Pagination, error) {
	var journals []*entity.Journal
	fmt.Println("pagination: ", pagination.Limit)
	svc.PostgresDb.Scopes(utils.Paginate(journals, &pagination, svc.PostgresDb)).Find(&journals)
	pagination.Rows = journals
	return &pagination, nil
}

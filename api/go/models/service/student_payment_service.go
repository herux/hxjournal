package service

import (
	"hxjournal/api/models/entity"
	"hxjournal/api/utils"
)

type StudentPaymentService struct {
	BaseService
}

func (svc *StudentPaymentService) List(pagination utils.Pagination) (*utils.Pagination, error) {
	var studentMajorPayments []*entity.StudentMajorPayment
	svc.PostgresDb.Scopes(utils.Paginate(studentMajorPayments, &pagination, svc.PostgresDb)).Find(&studentMajorPayments)
	pagination.Rows = studentMajorPayments
	return &pagination, nil
}

package entity

import "time"

type StudentMajorPayment struct {
	BaseModel
	StudentMajorID uint
	Transdate      time.Time
	Remark         string
	Paid           float64
}

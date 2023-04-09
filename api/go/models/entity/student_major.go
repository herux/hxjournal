package entity

type StudentMajor struct {
	BaseModel
	MajorID   uint
	StudentID uint
	Nis       string
	Cost      float64
	Paid      float64
	Remaining float64
}

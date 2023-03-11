package entity

type JournalDetail struct {
	BaseModel
	JournalId uint
	CoaId     uint
	Debit     float64
	Credit    float64
}

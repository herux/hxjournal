package entity

import (
	"time"
)

type Journal struct {
	BaseModel
	Total       float64
	Refs        string
	JournalNo   string
	Description string
	Posted      bool
	TransDate   time.Time
	TransName   string
	TransId     int
	JournalDate time.Time
}

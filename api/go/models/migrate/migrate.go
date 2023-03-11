package migrate

import (
	"errors"
	"hxjournal/api/models/db"
	"hxjournal/api/models/entity"
)

func ExecMigrate() {
	db := db.GetPSQLConnection()
	err := db.AutoMigrate(&entity.User{},
		&entity.Coa{},
		&entity.Journal{},
		&entity.JournalDetail{},
		&entity.CoaType{},
		&entity.Major{},
		&entity.Student{})
	if err != nil {
		errors.New(err.Error())
	}

	// default data for account type
	var coaTypes = []entity.CoaType{
		{Name: "Cash & Bank"},
		{Name: "Receivables"},
		{Name: "Stocks"},
		{Name: "Buildings"},
		{Name: "Inventory"},
		{Name: "Accumulated Depreciation"},
		{Name: "Debts"},
		{Name: "Long-term Debts"},
		{Name: "Obligations"},
		{Name: "Capital"},
		{Name: "Profit"},
		{Name: "Revenue"},
		{Name: "Cost of Goods"},
		{Name: "Burden"},
	}
	var coaTypesFind entity.CoaType
	result := db.Where("id = ?", 1).First(&coaTypesFind)
	if result.RowsAffected == 0 {
		db.CreateInBatches(coaTypes, 14)
	}
}

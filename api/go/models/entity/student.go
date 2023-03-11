package entity

import "time"

type Gender int

const (
	MALE_GENDER Gender = iota
	FEMALE_GENDER
)

type Religion int

const (
	ISLAM_RELIGION Religion = iota
	KRISTEN_RELIGION
	CATHOLIC_RELIGION
	HINDU_RELIGION
	BUDHA_RELIGION
)

type Student struct {
	BaseModel
	Fullname      string
	Address       string
	Phone         string
	Birthplace    string
	Birthdate     time.Time
	Gender        Gender
	Parentname    string
	Parentaddress string
	Parentphone   string
	Parentjob     string
	Picture       string
	Religion      Religion
}

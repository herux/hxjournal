package entity

type Major struct {
	BaseModel
	Name  string
	Cost  float64
	Count int
}

func (m *Major) Create() {

}

// func (m *Major) Find() []Major {

// }

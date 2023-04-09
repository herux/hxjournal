package utils

import (
	"fmt"
	"math"
	"strconv"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type Pagination struct {
	Limit      int         `json:"limit,omitempty;query:limit"`
	Page       int         `json:"page,omitempty;query:page"`
	Sort       string      `json:"sort,omitempty;query:sort"`
	TotalRows  int64       `json:"total_rows"`
	TotalPages int         `json:"total_pages"`
	Rows       interface{} `json:"rows"`
}

func (p *Pagination) GetOffset() int {
	return (p.GetPage() - 1) * p.GetLimit()
}

func (p *Pagination) GetLimit() int {
	if p.Limit == 0 {
		p.Limit = 10
	}
	return p.Limit
}

func (p *Pagination) GetPage() int {
	if p.Page == 0 {
		p.Page = 1
	}
	return p.Page
}

func (p *Pagination) GetSort() string {
	if p.Sort == "" {
		p.Sort = "Id desc"
	}
	return p.Sort
}

func Paginate(value interface{}, pagination *Pagination, db *gorm.DB) func(db *gorm.DB) *gorm.DB {
	var totalRows int64
	fmt.Println("db  ", db)
	db.Model(value).Count(&totalRows)

	pagination.TotalRows = totalRows
	var totalPages = 0
	totalPages = int(math.Ceil(float64(totalRows) / float64(pagination.Limit)))
	pagination.TotalPages = totalPages

	return func(db *gorm.DB) *gorm.DB {
		return db.Offset(pagination.GetOffset()).Limit(pagination.GetLimit()).Order(pagination.GetSort())
	}
}

func InitPagination(c *gin.Context) *Pagination {
	page, _ := strconv.Atoi(c.Query("page"))
	if page <= 0 {
		page = 1
	}

	pageSize, _ := strconv.Atoi(c.Query("per_page"))
	sort := c.Query("sort")
	var sortWithDirection string
	if sort != "" {
		direction := c.Query("sortDesc")
		if direction != "" {
			if direction == "true" {
				sortWithDirection = sort + " desc"
			} else if direction == "false" {
				sortWithDirection = sort + " asc"
			}
		}

	}

	switch {
	case pageSize <= 0:
		pageSize = 10
	}

	return &Pagination{
		Page:       page,
		Sort:       sort + sortWithDirection,
		TotalPages: pageSize,
	}
}

import { Component, Input, OnInit } from '@angular/core';
import { Toolaction } from '../models/toolaction';
import { BtnEventEmitterService } from '../btn-event-emitter.service'; 
import { Pagination } from '../models/pagination';
import { HttpClient } from "@angular/common/http";
import { ConfigService } from '../config/config.service';
import { UtilsService } from '../common/utils';


@Component({
  selector: 'hxtable',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() title: string
  @Input() data: any[]
  @Input() pagination: Pagination
  @Input() toolactions: Toolaction[]
  @Input() apiUrl: string
  @Input() refreshFunc: (args: any) => void;
  @Input() fields: string[]

  datas: any[];
  currentPage: number = 0;

  constructor(private btnEventEmitterService: BtnEventEmitterService, private http:HttpClient, 
    private configService: ConfigService, private utilsService: UtilsService) {}

  toolActionBtnClicked(action: string) {
    this.btnEventEmitterService.DoToolActionBtnClicked(action);
  }

  unsorted() {
    return 0;
  }

  paginationNext() {
    this.currentPage= this.currentPage + 1
    this.getData("?limit=10&page=" + (this.currentPage + 1))
  }

  paginationPrevious() {
    this.currentPage= this.currentPage - 1
    this.getData("?limit=10&page=" + (this.currentPage - 1))
  }

  btnEnabled() {
    if (this.currentPage == 0 ) {
      return 'disabled'
    }
    return '';
  }

  getData(query) {
      this.http.get<any[]>(this.apiUrl + query)
        .subscribe((responseData: any) => {
          if (responseData.r) {
            this.data = responseData.d.rows;
            this.pagination = responseData.d;
            this.utilsService.removePropExceptsArrayByOrder(this.data, this.fields);
          }
        });
    return null;
  }

  ngOnInit(): void {
    this.getData("?limit=10&page="+this.currentPage)
  }

  

}

import { Component, OnInit } from '@angular/core';
import { StudentPayment } from '../models/student_payment';
import { ConfigService } from '../config/config.service';
import { Toolaction } from '../models/toolaction';
import { UtilsService } from '../common/utils';
import { Pagination } from '../models/pagination';

@Component({
  selector: 'app-studentpayment',
  templateUrl: './studentpayment.component.html',
  styleUrls: ['./studentpayment.component.css']
})
export class StudentpaymentComponent implements OnInit {
  studentPayments: StudentPayment[];
  toolactions: Toolaction[] = [];
  apiUrl: string;
  pagination: Pagination;
  contentModals: string;
  fields: string[];
  constructor() { }

  getToolActions() {
    let TA_CONST = [
      { btnClass: 'btn btn-default', icon: 'fas fa-search', action: 'searchTAClicked' }, 
      { btnClass: 'btn btn-default', icon: 'fas fa-file-invoice', action: 'invoiceTAClicked' },
      { btnClass: 'btn btn-default', icon: 'fas fa-filter', action: 'filterTAClicked' },
      { btnClass: 'btn btn-default', icon: 'fas fa-plus', action: 'addTAClicked' },
    ];
    for (let index = 0; index < TA_CONST.length; index++) {
      let toolaction = TA_CONST[index]; 
      this.toolactions.push(toolaction);   
    }
  }

  ngOnInit(): void {
    // this.fields = ['Fullname', 'Birthdate', 'Birthplace', 'Gender', 'Parentname'];
    this.apiUrl = "http://localhost:8080/payment/list";
    this.getToolActions();
  }

}

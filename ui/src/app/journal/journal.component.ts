import { Component, OnInit } from '@angular/core';
import { Journal } from '../models/journal'
import { Pagination } from '../models/pagination';
import { Toolaction } from '../models/toolaction';

@Component({
  selector: 'hxjournal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  journals: Journal[];
  apiUrl: string;
  pagination: Pagination;
  toolactions: Toolaction[] = [];
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
    this.apiUrl = "http://localhost:8080/journal/list";
    this.getToolActions();
  }

}

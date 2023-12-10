import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { Student } from '../models/student';
import { Pagination } from '../models/pagination';
import { ConfigService } from '../config/config.service';
import { Toolaction } from '../models/toolaction';
import { UtilsService } from '../common/utils';
import { BtnEventEmitterService } from '../btn-event-emitter.service';
import { ToolactionServiceEvent } from '../toolaction-service-event';
import { ModalsComponent } from '../modals/modals.component'; 
import { ModalsService } from '../modals/modals.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, AfterViewInit {
  students: Student[];
  apiUrl: string;
  // pagination: Pagination;
  toolactions: Toolaction[] = [];
  contentModals: string;
  fields: string[];
  private _serviceSubscription : any;
  
  @ViewChild('hxmodals') 
  private modalsDialog: ModalsComponent;
  
  modalsFormGroup = new FormGroup({
    fullname: new FormControl(''),
    address: new FormControl(''),
    telephone: new FormControl(''),
    birthplace: new FormControl(''),
    birthdate: new FormControl(''),
    religion: new FormControl(''),
    parentname: new FormControl(''),
    parentaddress: new FormControl(''),
    parentphone: new FormControl(''),
  });
  

  constructor(private http:HttpClient, private configService: ConfigService, 
    private utilsService: UtilsService, private btnEmitter: BtnEventEmitterService,
    private modalsService: ModalsService) {
      this.apiUrl = this.configService.getStudentApiUrl();
      this._serviceSubscription = this.btnEmitter.onToolActionBtnClick.subscribe({
        next: (event: ToolactionServiceEvent) => {
          this[event.action]();
        }
      })
  }

  searchTAClicked() {
    
  }

  invoiceTAClicked() {

  }

  filterTAClicked() {

  }

  tableRowClicked() {
    this.modalsService
      .show()
      .then(() => {

      })
      .catch((err) => {

      });
  }

  addTAClicked() {
    this.modalsService
      .show()
      .then(() => {
        console.warn('ok clicked ', this.modalsFormGroup);
      })
      .catch((err) => {
        console.warn('rejected');
      });
  }

  getToolActions() {
    let TA_CONST = [
      { btnClass: 'btn btn-default', icon: 'fas fa-search', action: 'searchTAClicked' }, 
      { btnClass: 'btn btn-default', icon: 'fas fa-file-invoice', action: 'invoiceTAClicked' },
      { btnClass: 'btn btn-default', icon: 'fas fa-filter', action: 'filterTAClicked' },
      { btnClass: 'btn btn-default', icon: 'fas fa-plus', action: 'addTAClicked' },
      { btnClass: '', icon: '', action: 'tableRowClicked' },
    ];
    for (let index = 0; index < TA_CONST.length; index++) {
      let toolaction = TA_CONST[index]; 
      this.toolactions.push(toolaction);   
    }
  }

  ngAfterViewInit() {
    this.modalsService.register(this.modalsDialog);
    this.contentModals = 'test';
  }

  ngOnInit(): void {
    this.fields = ['Fullname', 'Birthdate', 'Birthplace', 'Gender', 'Parentname'];
    this.getToolActions();
  }

}

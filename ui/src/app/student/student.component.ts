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
  selector: 'hxstudent',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, AfterViewInit {
  students: Student[];
  apiUrl: string;
  toolactions: Toolaction[] = [];
  contentModals: string;
  fields: string[];
  private _serviceSubscription : any;
  
  @ViewChild('hxmodals') 
  private modalsDialog: ModalsComponent;
  
  modalsFormGroup = new FormGroup({
    FULLNAME: new FormControl(''),
    ADDRESS: new FormControl(''),
    TELEPHONE: new FormControl(''),
    BIRTHPLACE: new FormControl(''),
    BIRTHDATE: new FormControl(''),
    RELIGION: new FormControl(''),
    PARENTNAME: new FormControl(''),
    PARENTADDRESS: new FormControl(''),
    PARENTPHONE: new FormControl(''),
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

  tableRowClicked(event: any) {
    this.modalsFormGroup = new FormGroup({
      FULLNAME: new FormControl(event.FULLNAME),
      ADDRESS: new FormControl(event.ADDRESS),
      TELEPHONE: new FormControl(event.TELEPHONE),
      BIRTHPLACE: new FormControl(event.BIRTHPLACE),
      BIRTHDATE: new FormControl(event.BIRTHDATE),
      RELIGION: new FormControl(event.RELIGION),
      PARENTNAME: new FormControl(event.PARENTNAME),
      PARENTADDRESS: new FormControl(event.PARENTADDRESS),
      PARENTPHONE: new FormControl(event.PARENTPHONE),
    });

    this.modalsService
      .show()
      .then(async () => {
        await this.http.post(this.apiUrl, event)
        .subscribe((response) => {
          console.log('response: ', response);
        });
      })
      .catch((err) => {
        console.log('cancel ', err);
      });
  }

  addTAClicked() {
    this.modalsService
      .show()
      .then(() => {
        console.warn('ok clicked ');
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
    ];
    for (let index = 0; index < TA_CONST.length; index++) {
      let toolaction = TA_CONST[index]; 
      this.toolactions.push(toolaction);   
    }
  }

  ngAfterViewInit() {
    this.modalsService.register(this.modalsDialog);
  }

  ngOnInit(): void {
    // this.fields = ['FULLNAME', 'BIRTHDATE', 'BIRTHPLACE', 'GENDER', 'PARENTNAME'];
    this.getToolActions();
  }

}

import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Journal } from '../models/journal'
import { Toolaction } from '../models/toolaction';
import {HttpClient} from "@angular/common/http";
import { ConfigService } from '../config/config.service';
import { UtilsService } from '../common/utils';
import { ModalsComponent } from '../modals/modals.component'; 
import { FormControl, FormGroup } from '@angular/forms';
import { ModalsService } from '../modals/modals.service';
import { CoabrowserService } from '../coabrowser/coabrowser.service';
import { BtnEventEmitterService } from '../btn-event-emitter.service';
import { ToolactionServiceEvent } from '../toolaction-service-event';
import { CoabrowserComponent } from '../coabrowser/coabrowser.component';

@Component({
  selector: 'hxjournal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  apiUrl: any = '';
  toolactions: Toolaction[] = [];
  toolactionDetails: Toolaction[] = [];
  fields: string[];
  private _serviceSubscription : any;

  @ViewChild('hxmodals') 
  private modalsDialog: ModalsComponent;
  @ViewChild('hxcoabrowse') 
  private coaBrowseDialog: CoabrowserComponent;

  modalsFormGroup = new FormGroup({
    JOURNAL_NO: new FormControl(''),
    DESCRIPTION: new FormControl(''),
    TOTAL: new FormControl(''),
    REFF_NO: new FormControl(''),
    REFF_TYPE: new FormControl(''),
    TRANSACTIONAT: new FormControl(''),
    JOURNAL_DATE: new FormControl(''),    
  });

  constructor(private http:HttpClient, private configService: ConfigService, 
    private utilsService: UtilsService, private btnEmitter: BtnEventEmitterService,
    private modalsService: ModalsService, private coabrowerService: CoabrowserService) {
      this.apiUrl = this.configService.getJournalApiUrl();
      this._serviceSubscription = this.btnEmitter.onToolActionBtnClick.subscribe({
        next: (event: ToolactionServiceEvent) => {
          this[event.action]();
        }
      })
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

  searchTAClicked() {
    
  }

  invoiceTAClicked() {

  }

  filterTAClicked() {
    // this.coabrowerService
    //   .show()
    //   .then(() => {
    //     console.warn('ok filterTAClicked ');
    //   })
    //   .catch((err) => {
    //     console.warn('reject filterTAClicked');
    //   });
  }

  addTAClicked() {
    this.modalsService
      .show()
      .then(() => {
        console.warn('ok clicked ');
      })
      .catch((err) => {
        console.warn('rejectedasd');
      });
  }

  tableRowClicked(event: any) {

  }

  getToolActionDetails() {
    let TA_CONST = [
      // { btnClass: 'btn btn-default', icon: 'fas fa-filter', action: 'filterTAClicked' },
      { btnClass: 'btn btn-default', icon: 'fas fa-plus', action: 'addJournalDetailClicked' },
    ];
    for (let index = 0; index < TA_CONST.length; index++) {
      let toolaction = TA_CONST[index]; 
      this.toolactionDetails.push(toolaction);   
    }
  }

  addJournalDetailClicked() {
    this.coabrowerService
      .show()
      .then(() => {
        console.warn('ok addJournalDetailClicked ');
      })
      .catch((err) => {
        console.warn('reject addJournalDetailClicked');
      });
  }

  ngAfterViewInit() {
    this.modalsService.register(this.modalsDialog);
    this.coabrowerService.register(this.coaBrowseDialog);
  }

  ngOnInit(): void {
    // this.fields = ['Fullname', 'Birthdate', 'Birthplace', 'Gender', 'Parentname'];
    this.getToolActions();
    this.getToolActionDetails();
  }

}

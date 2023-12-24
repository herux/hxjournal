import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Journal } from '../models/journal'
import { Toolaction } from '../models/toolaction';
import {HttpClient} from "@angular/common/http";
import { ConfigService } from '../config/config.service';
import { UtilsService } from '../common/utils';
import { ModalsComponent } from '../modals/modals.component'; 
import { FormControl, FormGroup } from '@angular/forms';
import { ModalsService } from '../modals/modals.service';
import { BtnEventEmitterService } from '../btn-event-emitter.service';
import { ToolactionServiceEvent } from '../toolaction-service-event';

@Component({
  selector: 'hxjournal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  apiUrl: any = '';
  toolactions: Toolaction[] = [];
  fields: string[];
  private _serviceSubscription : any;

  @ViewChild('hxmodals') 
  private modalsDialog: ModalsComponent;

  modalsFormGroup = new FormGroup({
    JOURNAL_NO: new FormControl(''),
  });

  constructor(private http:HttpClient, private configService: ConfigService, 
    private utilsService: UtilsService, private btnEmitter: BtnEventEmitterService,
    private modalsService: ModalsService) {
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

  }

  addTAClicked() {
    console.log('addTAClicked 0');
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

  ngAfterViewInit() {
    this.modalsService.register(this.modalsDialog);
  }

  ngOnInit(): void {
    // this.fields = ['Fullname', 'Birthdate', 'Birthplace', 'Gender', 'Parentname'];
    this.getToolActions();
  }

}

import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { StudentPayment } from '../models/student_payment';
import { ConfigService } from '../config/config.service';
import { Toolaction } from '../models/toolaction';
import { UtilsService } from '../common/utils';
import { Pagination } from '../models/pagination';
import { BtnEventEmitterService } from '../btn-event-emitter.service';
import { ModalsComponent } from '../modals/modals.component'; 
import { ModalsService } from '../modals/modals.service';
import { FormControl, FormGroup } from '@angular/forms';

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

  constructor(private btnEmitter: BtnEventEmitterService,
    private modalsService: ModalsService) { }

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

  addTAClicked() {
    console.log('test')
    this.modalsService
      .show()
      .then(() => {
        console.warn('ok clicked ', this.modalsFormGroup);
      })
      .catch((err) => {
        console.warn('rejected');
      });
  }

  ngAfterViewInit() {
    this.modalsService.register(this.modalsDialog);
    this.contentModals = 'test';
  }

  ngOnInit(): void {
    // this.fields = ['Fullname', 'Birthdate', 'Birthplace', 'Gender', 'Parentname'];
    this.apiUrl = "http://localhost:3030/payment/list";
    this.getToolActions();
  }

}

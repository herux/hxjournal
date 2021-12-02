import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { Student } from '../models/student';
import { ConfigService } from '../config/config.service';
import { Toolaction } from '../models/toolaction';
import { UtilsService } from '../common/utils';
import { BtnEventEmitterService } from '../btn-event-emitter.service';
import { ToolactionServiceEvent } from '../toolaction-service-event';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Student[];
  toolactions: Toolaction[] = [];

  constructor(private http:HttpClient, private configService: ConfigService, 
    private utilsService: UtilsService, private btnEmitter: BtnEventEmitterService) {
  }

  getStudent() {
    this.configService.getStudentApiUrl((url) => {
      this.http.get<Student[]>(url)
        .subscribe((studentData: any) => {
          if (studentData.r) {
            // this.utilsService.renamePropArray(coa.d, 'coa_category', 'category');
            // this.utilsService.renamePropArray(coa.d, 'coa_dk', 'dk');
            // this.utilsService.renamePropArray(coa.d, 'coa_gd', 'gd');
            // this.utilsService.renamePropArray(coa.d, 'coa_gen', 'gen');
            // this.utilsService.renamePropArray(coa.d, 'coa_level', 'level');
            // this.utilsService.renamePropArray(coa.d, 'coa_md', 'md');
            // this.utilsService.renamePropArray(coa.d, 'coa_mk', 'mk');
            // this.utilsService.renamePropArray(coa.d, 'coa_no', 'coa number');
            // this.utilsService.renamePropArray(coa.d, 'coa_sad', 'sad');
            // this.utilsService.renamePropArray(coa.d, 'coa_sak', 'sak');
            // this.utilsService.renamePropArray(coa.d, 'coa_wno', 'coa parent');
            // this.utilsService.renamePropArray(coa.d, 'createdat', 'created at');
            // this.utilsService.removePropExceptsArray(coa.d, 
            //   ['category', 'dk', 'gd', 'gen', 'level', 'md', 'mk', 'coa number', 'sad', 'sak', 'coa parent', 'created at']);
            this.students = studentData.d;
          }
        });
    });
    return null;
  }

  private _serviceSubscription;

  toolActionBtnClicked() {
    this._serviceSubscription = this.btnEmitter.onToolActionBtnClick.subscribe({
      next: (event: ToolactionServiceEvent) => {
        console.log(`Received message #${event.eventId}: ${event.message}`);
      }
    })
  }

  getToolActions() {
    let TA_CONST = [
      { btnClass: 'btn btn-default', icon: 'fas fa-search', action: 'DoToolActionBtnClicked("search", 41)' }, 
      { btnClass: 'btn btn-default', icon: 'fas fa-file-invoice', action: 'DoToolActionBtnClicked("invoice", 42)' },
      { btnClass: 'btn btn-default', icon: 'fas fa-filter', action: 'DoToolActionBtnClicked("filter", 43)' },
      { btnClass: 'btn btn-default', icon: 'fas fa-plus', action: 'DoToolActionBtnClicked("add", 44)' },
    ];
    for (let index = 0; index < TA_CONST.length; index++) {
      let toolaction = TA_CONST[index]; 
      this.toolactions.push(toolaction);   
    }
  }

  ngOnInit(): void {
    this.getStudent();
    this.getToolActions();
  }

}

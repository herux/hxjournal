import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Config } from '../models/config';
import {HttpClient} from "@angular/common/http";
import { ConfigService } from '../config/config.service';
import { Toolaction } from '../models/toolaction';
import { UtilsService } from '../common/utils';


@Component({
  selector: 'hxcoa',
  templateUrl: './coa.component.html',
  styleUrls: ['./coa.component.css']
})
export class CoaComponent implements OnInit {
  apiUrl: any = '';
  toolactions: Toolaction[] = [];

  constructor(private http:HttpClient, private configService: ConfigService, 
    private utilsService: UtilsService) {
      this.apiUrl = this.configService.getCoaApiUrl();
  }

  getToolActions() {
    let TA_CONST = [
      { btnClass: 'btn btn-default', icon: 'fas fa-search', action: '' }, 
      { btnClass: 'btn btn-default', icon: 'fas fa-file-invoice', action: '' },
      { btnClass: 'btn btn-default', icon: 'fas fa-filter', action: '' },
      { btnClass: 'btn btn-default', icon: 'fas fa-plus', action: '' },
    ];
    for (let index = 0; index < TA_CONST.length; index++) {
      let toolaction = TA_CONST[index]; 
      this.toolactions.push(toolaction);   
    }
  }

  ngOnInit() {
    this.getToolActions();
  }

}

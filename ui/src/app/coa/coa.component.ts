import { Component, OnInit } from '@angular/core';
import { Config } from '../models/config';
import {HttpClient} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { Coa } from '../models/coa';
import { ConfigService } from '../config/config.service';
import { Toolaction } from '../models/toolaction';

@Component({
  selector: 'hxcoa',
  templateUrl: './coa.component.html',
  styleUrls: ['./coa.component.css']
})
export class CoaComponent implements OnInit {
  accounts: Coa[];
  toolactions: Toolaction[] = [];

  constructor(private http:HttpClient, private configService: ConfigService) {
  }

  getCoa() {
    this.configService.getCoaApiUrl((url) => {
      console.log('url, ', url);
      this.http.get<Coa[]>(url)
        .subscribe((coa: any) => {
          console.log('coa, ', coa);
          if (coa.r) {
            this.accounts = coa.d;
          }
        });
    });
    return null;
  }

  getToolActions() {
    let TA_CONST = [
      { btnClass: 'btn btn-default', icon: 'fas fa-search' }, 
      { btnClass: 'btn btn-default', icon: 'fas fa-file-invoice' },
      { btnClass: 'btn btn-default', icon: 'fas fa-filter' },
      { btnClass: 'btn btn-default', icon: 'fas fa-plus' },
    ];
    for (let index = 0; index < TA_CONST.length; index++) {
      let toolaction = TA_CONST[index]; 
      this.toolactions.push(toolaction);   
    }
  }

  ngOnInit(): void {
    this.getCoa();
    this.getToolActions();
  }

}

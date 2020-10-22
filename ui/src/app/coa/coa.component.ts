import { Component, OnInit } from '@angular/core';
import { Config } from '../models/config';
import {HttpClient} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { Account } from '../models/account';
import { ConfigService } from '../config/config.service';
import { Toolaction } from '../models/toolaction';

@Component({
  selector: 'hxcoa',
  templateUrl: './coa.component.html',
  styleUrls: ['./coa.component.css']
})
export class CoaComponent implements OnInit {
  accounts: Account[];
  toolactions: Toolaction[] = [];

  constructor(private http:HttpClient, private configService: ConfigService) {
  }

  getAccounts() {
    this.configService.getAccountApiUrl((url) => {
      this.http.get<Account[]>(url)
        .subscribe(accounts => {
          this.accounts = accounts;
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
    this.getAccounts();
    this.getToolActions();
    console.log(this.toolactions);
  }

}

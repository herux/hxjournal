import { Component, OnInit } from '@angular/core';
import { Config } from '../models/config';
import {HttpClient} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { Account } from '../models/account';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'hxcoa',
  templateUrl: './coa.component.html',
  styleUrls: ['./coa.component.css']
})
export class CoaComponent implements OnInit {
  accounts: Observable<Account[]>;
  constructor(private http:HttpClient, private configService: ConfigService) {
  }

  getAccounts(): Observable<Account[]> {
    this.configService.getAccountApiUrl((url) => {
      console.log('--> '+url);  
      this.http.get<Account>(url)
        .subscribe((data: Account) => {
          console.log('--1 ',  data);  
      });
    });
    return null;
  }

  ngOnInit(): void {
    this.getAccounts();
  }

}

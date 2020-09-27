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
  accounts: [];
  constructor(private http:HttpClient, private configService: ConfigService) {
  }

  getAccounts() {
    this.configService.getAccountApiUrl((url) => {
      this.http.get<Account[]>(url)
        .subscribe(accounts => this.accounts = accounts);
    });
    return null;
  }

  ngOnInit(): void {
    this.getAccounts();
  }

}

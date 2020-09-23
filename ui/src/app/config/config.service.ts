import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable()
export class ConfigService {
  accountUrl = 'http://localhost:3030/apis/v1/accounts';

  constructor(private http: HttpClient) { }

  getAccount() {
    return this.http.get(this.accountUrl);
  }
}

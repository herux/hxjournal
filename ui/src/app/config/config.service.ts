import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Config } from '../models/config';
import { _ParseAST } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = 'assets/config.json';

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get<Config>(this.configUrl);
  }

  getCoaApiUrl(callback) {
    this.getConfig()
      .subscribe((data: Config) => {
        callback(data.coaDataUrl);
      });
  }

  getStudentApiUrl(callback) {
    this.getConfig()
      .subscribe((data: Config) => {
        callback(data.studentDataUrl);
      });
  }

}

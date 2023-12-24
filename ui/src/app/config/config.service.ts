import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Config } from '../models/config';
import { _ParseAST } from '@angular/compiler';
import * as configData from '../../assets/config.json';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configFile = 'assets/config.json';
  config: Config;

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get<Config>(this.configFile);
  }

  getCoaApiUrl() {
    return configData.host + configData.coaDataUrl;
  }

  getStudentApiUrl() {
    return configData.host + configData.studentDataUrl;
  }

  getJournalApiUrl() {
    return configData.host + configData.journalDataUrl;
  }

}

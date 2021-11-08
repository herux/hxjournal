import { Component, OnInit } from '@angular/core';
import { Config } from '../models/config';
import {HttpClient} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { Coa } from '../models/coa';
import { ConfigService } from '../config/config.service';
import { Toolaction } from '../models/toolaction';
import { UtilsService } from '../common/utils';

@Component({
  selector: 'hxcoa',
  templateUrl: './coa.component.html',
  styleUrls: ['./coa.component.css']
})
export class CoaComponent implements OnInit {
  coas: Coa[];
  toolactions: Toolaction[] = [];

  constructor(private http:HttpClient, private configService: ConfigService, 
    private utilsService: UtilsService) {
  }

  getCoa() {
    this.configService.getCoaApiUrl((url) => {
      this.http.get<Coa[]>(url)
        .subscribe((coa: any) => {
          if (coa.r) {
            this.utilsService.renamePropArray(coa.d, 'coa_category', 'category');
            this.utilsService.renamePropArray(coa.d, 'coa_dk', 'dk');
            this.utilsService.renamePropArray(coa.d, 'coa_gd', 'gd');
            this.utilsService.renamePropArray(coa.d, 'coa_gen', 'gen');
            this.utilsService.renamePropArray(coa.d, 'coa_level', 'level');
            this.utilsService.renamePropArray(coa.d, 'coa_md', 'md');
            this.utilsService.renamePropArray(coa.d, 'coa_mk', 'mk');
            this.utilsService.renamePropArray(coa.d, 'coa_no', 'coa number');
            this.utilsService.renamePropArray(coa.d, 'coa_sad', 'sad');
            this.utilsService.renamePropArray(coa.d, 'coa_sak', 'sak');
            this.utilsService.renamePropArray(coa.d, 'coa_wno', 'coa parent');
            this.utilsService.renamePropArray(coa.d, 'createdat', 'created at');
            this.utilsService.removePropExceptsArray(coa.d, 
              ['category', 'dk', 'gd', 'gen', 'level', 'md', 'mk', 'coa number', 'sad', 'sak', 'coa parent', 'created at']);
            this.coas = coa.d;
          }
        });
    });
    return null;
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

  ngOnInit(): void {
    this.getCoa();
    this.getToolActions();
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'hxtable',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() title: string
  @Input() data: any[]

  configService : ConfigService
  
  constructor() { }

  ngOnInit(): void {
    this.configService.getAccount()
      .subscribe((data: any) => )
  }

}

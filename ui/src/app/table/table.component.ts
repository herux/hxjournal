import { Component, Input, OnInit } from '@angular/core';
import { Toolaction } from '../models/toolaction';
import { BtnEventEmitterService } from '../btn-event-emitter.service'; 

@Component({
  selector: 'hxtable',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() title: string
  @Input() data: any[]
  @Input() toolactions: Toolaction[]

  constructor(private btnEventEmitterService: BtnEventEmitterService) {}

  toolActionBtnClicked(btnName: string) {
    this.btnEventEmitterService.onToolActionBtnClick();
  }

  ngOnInit(): void {
    console.log('toolactions: ', this.toolactions); 
  }

  

}

import { Component, Input, OnInit } from '@angular/core';
import { Toolaction } from '../models/toolaction';
import { BtnEventEmitterService } from '../btn-event-emitter.service'; 
import { ToolactionServiceEvent } from '../toolaction-service-event';

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

  toolActionBtnClicked(btnName: string, eventId: number) {
    let eventSvc = new ToolactionServiceEvent;
    eventSvc.message = btnName;
    eventSvc.eventId = eventId;
    this.btnEventEmitterService.DoToolActionBtnClicked(eventSvc);
  }

  ngOnInit(): void {
    
  }

  

}

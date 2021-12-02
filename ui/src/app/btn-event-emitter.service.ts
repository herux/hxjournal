import { Injectable, EventEmitter } from '@angular/core';
import { ToolactionServiceEvent } from './toolaction-service-event';

@Injectable({
  providedIn: 'root'
})
export class BtnEventEmitterService {

  public onToolActionBtnClick: EventEmitter<ToolactionServiceEvent> = new EventEmitter<ToolactionServiceEvent>();


  constructor() { }

  DoToolActionBtnClicked(message: string, eventId: number) {
    console.log('message: ', message, 'eventId: ', eventId);
    this.onToolActionBtnClick.emit({message: message, eventId: eventId});
  }

}

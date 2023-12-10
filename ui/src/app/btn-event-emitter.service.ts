import { Injectable, EventEmitter } from '@angular/core';
import { ToolactionServiceEvent } from './toolaction-service-event';

@Injectable({
  providedIn: 'root'
})
export class BtnEventEmitterService {

  public onToolActionBtnClick: EventEmitter<ToolactionServiceEvent> = new EventEmitter<ToolactionServiceEvent>();


  constructor() { }

  DoToolActionBtnClicked(action: any) {
    console.log('DoToolActionBtnClicked ', action);
    this.onToolActionBtnClick.emit({action: action});
  }

}

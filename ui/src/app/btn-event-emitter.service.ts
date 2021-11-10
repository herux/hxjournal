import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BtnEventEmitterService {

  invokedBtnFunction = new EventEmitter();

  constructor() { }

  onToolActionBtnClick() {
    this.invokedBtnFunction.emit();
  }

}

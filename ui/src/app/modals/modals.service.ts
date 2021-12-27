import { Injectable } from '@angular/core';
import { ModalsComponent } from './modals.component';

@Injectable({
  providedIn: 'root'
})
export class ModalsService {

  registeredModals: ModalsComponent;

  register(modals: ModalsComponent) {
    this.registeredModals = modals;
  }

  show() {
    return new Promise((resolve, reject) => {      
      console.log('service show');
      this.registeredModals.show();      
      this.registeredModals.onOk.subscribe(() => {
        this.registeredModals.hide();
        resolve();
      });
      this.registeredModals.onCancel.subscribe(() => {
        this.registeredModals.hide();
        reject();
      });

    });
  }
  
}

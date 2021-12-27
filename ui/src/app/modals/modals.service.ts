import { ModalsComponent } from './modals.component';
import { TemplateRef } from '@angular/core';

export class ModalsService {

  registeredModals: ModalsComponent;

  register(modals: ModalsComponent) {
    this.registeredModals = modals;
    console.log('this.registeredModals #2: ', this.registeredModals);
  }

  show() {
    return new Promise((resolve, reject) => {      
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

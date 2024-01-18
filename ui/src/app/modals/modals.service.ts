import { ModalsComponent } from './modals.component';
import { TemplateRef } from '@angular/core';

export class ModalsService {

  registeredModals: ModalsComponent;

  register(modals: ModalsComponent) {
    this.registeredModals = modals;
  }

  show() {
    return new Promise((resolve, reject) => {      
      console.log('ModalsService registered');
      this.registeredModals.show();      
      this.registeredModals.onOk.subscribe(() => {
        this.registeredModals.hide();
      });
      this.registeredModals.onCancel.subscribe(() => {
        this.registeredModals.hide();
        reject();
      });

    });
  }
  
}

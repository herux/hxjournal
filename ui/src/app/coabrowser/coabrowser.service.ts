import { CoabrowserComponent } from './coabrowser.component';

export class CoabrowserService {
    registeredCoaBrowser: CoabrowserComponent;

    register(modals: CoabrowserComponent) {
        this.registeredCoaBrowser = modals;
      }
    
      show() {
        return new Promise((resolve, reject) => {      
          console.log('CoabrowserService registered');
          this.registeredCoaBrowser.show();      
          this.registeredCoaBrowser.onOk.subscribe(() => {
            this.registeredCoaBrowser.hide();
          });
          this.registeredCoaBrowser.onCancel.subscribe(() => {
            this.registeredCoaBrowser.hide();
            reject();
          });
    
        });
      }
}
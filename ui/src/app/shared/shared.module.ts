import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsComponent } from '../modals/modals.component';
import { ModalsService } from '../modals/modals.service';

@NgModule({
  imports: [CommonModule],
  exports: [ModalsComponent],
  declarations: [ModalsComponent],
  providers: [ModalsService]
})
export class SharedModule { }

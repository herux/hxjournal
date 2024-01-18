import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsComponent } from '../modals/modals.component';
import { ModalsService } from '../modals/modals.service';
import { CoabrowserComponent } from '../coabrowser/coabrowser.component';
import { CoabrowserService } from '../coabrowser/coabrowser.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: 
  [ 
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,
  ],
  exports: [ModalsComponent, CoabrowserComponent],
  declarations: [ModalsComponent, CoabrowserComponent],
  providers: [ModalsService, CoabrowserService]
})
export class SharedModule { }

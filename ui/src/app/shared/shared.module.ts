import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsComponent } from '../modals/modals.component';
import { ModalsService } from '../modals/modals.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ModalsComponent],
  declarations: [ModalsComponent],
  providers: [ModalsService]
})
export class SharedModule { }

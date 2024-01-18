import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JournalComponent } from './journal/journal.component';
import { LedgerComponent } from './ledger/ledger.component';
import { ReportComponent } from './report/report.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MenubarComponent } from './menubar/menubar.component';
import { MenuleftComponent } from './menuleft/menuleft.component';
import { TableComponent } from './table/table.component';
import { CoaComponent } from './coa/coa.component';
import { ToolactionComponent } from './toolaction/toolaction.component';
import { StudentComponent } from './student/student.component';
import { StudentpaymentComponent } from './studentpayment/studentpayment.component';
import { BtnEventEmitterService } from './btn-event-emitter.service';
import { SharedModule } from './shared/shared.module';
import { DatefieldPipe } from './datefield.pipe';
import { GenderfieldPipe } from './genderfield.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    JournalComponent,
    LedgerComponent,
    ReportComponent,
    ToolbarComponent,
    MenubarComponent,
    MenuleftComponent,
    TableComponent,
    CoaComponent,
    ToolactionComponent,
    StudentComponent,
    StudentpaymentComponent,
    DatefieldPipe,
    GenderfieldPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    BtnEventEmitterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

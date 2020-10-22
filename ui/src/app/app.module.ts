import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

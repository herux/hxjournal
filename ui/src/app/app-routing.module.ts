import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JournalComponent } from './journal/journal.component';
import { CoaComponent } from './coa/coa.component';
import { LedgerComponent } from './ledger/ledger.component';
import { ReportComponent } from './report/report.component';
import { StudentComponent } from './student/student.component';
import { StudentpaymentComponent } from './studentpayment/studentpayment.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'journal', component: JournalComponent},
  { path: 'coa', component: CoaComponent},
  { path: 'ledger', component: LedgerComponent},
  { path: 'report', component: ReportComponent},
  { path: 'student', component: StudentComponent},
  { path: 'studentpayment', component: StudentpaymentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AcoountSummaryComponent } from './acoount-summary/acoount-summary.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "dashboard",component: DashboardComponent},
  {path: 'summary',component: AcoountSummaryComponent},
  {path: 'fundtranfer',component: FundTransferComponent},
  {path: 'transactions',component: TransactionsComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

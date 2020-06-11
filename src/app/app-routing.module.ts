import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AcoountSummaryComponent } from './acoount-summary/acoount-summary.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';


const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "dashboard",component: DashboardComponent},
  {path: 'summary',component: AcoountSummaryComponent},
  {path: 'fundtranfer',component: FundTransferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

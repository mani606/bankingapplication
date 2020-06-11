import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HighlightDirective } from './directive/highlight.directive';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'

import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AcoountSummaryComponent } from './acoount-summary/acoount-summary.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AcoountSummaryComponent,
    FundTransferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule /* or CommonModule */, 
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

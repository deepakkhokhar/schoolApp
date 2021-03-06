import { CommonModule } from '@angular/common'; 
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { HttpModule } from "@angular/http";

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ExpensesRoutingModule } from './expenses-routing.module';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ExpensesComponent } from './expenses.component';
import { ExpenseAddComponent } from './expenseadd.component';
@NgModule({
  imports: [
     CommonModule,FormsModule, HttpModule,
     ExpensesRoutingModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  declarations: [ ExpensesComponent,ExpenseAddComponent ]
})
export class ExpensesModule { }

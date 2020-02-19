import { CommonModule } from '@angular/common'; 
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { HttpModule } from "@angular/http";

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ExpenseCategoryRoutingModule } from './expensecategory-routing.module';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ExpenseCategoryComponent } from './expensecategory.component';
import { ExpenseCategoryAddComponent } from './expensecategoryadd.component';
@NgModule({
  imports: [
     CommonModule,FormsModule, HttpModule,
     ExpenseCategoryRoutingModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  declarations: [ ExpenseCategoryComponent,ExpenseCategoryAddComponent ]
})
export class ExpenseCategoryModule { }

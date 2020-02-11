import { CommonModule } from '@angular/common'; 
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { HttpModule } from "@angular/http";

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ReportsRoutingModule } from './reports-routing.module';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ReportsComponent } from './reports.component';
@NgModule({
  imports: [
     CommonModule,FormsModule, HttpModule,
     ReportsRoutingModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  declarations: [ ReportsComponent ]
})
export class ReportsModule { }

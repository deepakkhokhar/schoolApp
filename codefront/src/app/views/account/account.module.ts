import { CommonModule } from '@angular/common'; 
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { HttpModule } from "@angular/http";

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AccountRoutingModule } from './account-routing.module';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AccountComponent } from './account.component';
@NgModule({
  imports: [
     CommonModule,FormsModule, HttpModule,
    AccountRoutingModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  declarations: [ AccountComponent ]
})
export class AccountModule { }

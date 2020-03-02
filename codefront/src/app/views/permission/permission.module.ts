import { CommonModule } from '@angular/common'; 
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { HttpModule } from "@angular/http";

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { PermissionRoutingModule } from './permission-routing.module';
import { AlertModule } from 'ngx-bootstrap/alert';
import { PermissionComponent } from './permission.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
@NgModule({
  imports: [
     CommonModule,FormsModule, HttpModule,
     PermissionRoutingModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    TabsModule.forRoot()
  ],
  declarations: [ PermissionComponent ]
})
export class PermissionModule { }

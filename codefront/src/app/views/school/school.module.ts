import { CommonModule } from '@angular/common'; 
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { HttpModule } from "@angular/http";

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { SchoolComponent } from './school.component';
import { AddSchoolComponent } from './schooladd.component';
import { SchoolRoutingModule } from './school-routing.module';
import { AddSchoolUserComponent } from './schooladduser.component';
import { SchoolUsersComponent } from './schoolusers.component';
import { AlertModule } from 'ngx-bootstrap/alert';
@NgModule({
  imports: [
     CommonModule,FormsModule, HttpModule,
    SchoolRoutingModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  declarations: [ SchoolComponent,AddSchoolComponent,AddSchoolUserComponent,SchoolUsersComponent ]
})
export class SchoolModule { }

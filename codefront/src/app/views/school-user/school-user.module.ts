import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolUserRoutingModule } from './school-user-routing.module';
import { AddSchoolUserComponent } from './add-school-user/add-school-user.component';
import { SchoolUserListsComponent } from './school-user-lists/school-user-lists.component';
import { SchoolUserLoginComponent } from './school-user-login/school-user-login.component';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule, ButtonsModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
 

@NgModule({
  declarations: [
     AddSchoolUserComponent,
     SchoolUserListsComponent,
     SchoolUserLoginComponent
    ],
  imports: [
    CommonModule,
    SchoolUserRoutingModule,
    FormsModule, HttpClientModule,ReactiveFormsModule,
   AlertModule.forRoot(),
   ButtonsModule.forRoot()
  ]
})
export class SchoolUserModule { }

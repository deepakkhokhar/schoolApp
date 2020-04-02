import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AlertModule, ButtonsModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AdminRoutingModule } from './admin-routing.module';
import { RegisterComponent } from './register/register.component';
import { AdminListingComponent } from './admin-listing/admin-listing.component';


@NgModule({
  declarations: [RegisterComponent, AdminListingComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule, HttpClientModule,ReactiveFormsModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot()
  ]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolDashboardRoutingModule } from './school-dashboard-routing.module';
import { SchoolDashboardComponent } from './school-dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SchoolDashboardComponent],
  imports: [
    CommonModule,
    SchoolDashboardRoutingModule,
    FormsModule,
    ChartsModule,
    BsDropdownModule,
  ]
})
export class SchoolDashboardModule { }

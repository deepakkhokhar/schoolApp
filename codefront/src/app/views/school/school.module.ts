import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { SchoolComponent } from './school.component';
import { AddSchoolComponent } from './schooladd.component';
import { SchoolRoutingModule } from './school-routing.module';

@NgModule({
  imports: [
    FormsModule,
    SchoolRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ SchoolComponent,AddSchoolComponent ]
})
export class SchoolModule { }

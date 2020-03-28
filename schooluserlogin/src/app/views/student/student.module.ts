import { CommonModule } from '@angular/common'; 
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { StudentRoutingModule } from './student-routing.module';
import { AlertModule } from 'ngx-bootstrap/alert';
import { StudentlistingComponent } from './studentlisting.component';
import { StudentaddComponent } from './studentadd.component';

@NgModule({
  imports: [
     CommonModule,FormsModule, HttpModule,
     StudentRoutingModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  declarations: [StudentlistingComponent,StudentaddComponent ]
})
export class StudentModule { }

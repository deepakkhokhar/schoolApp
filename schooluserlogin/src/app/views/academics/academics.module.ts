import { CommonModule } from '@angular/common'; 
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AcademicsRoutingModule } from './academics-routing.module';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AcademicsClassComponent } from './academicsclass.component';
import { AcademicsClassAddComponent } from './academicsclassadd.component';
import { AcademicsStreamComponent } from './academicsstream.component';
import { AcademicsStreamAddComponent } from './academicsstreamadd.component';
import { AcademicsSubjectComponent } from './academicssubject.component';
import { AcademicsSubjectAddComponent } from './academicssubjectadd.component';
import { AcademicsYearComponent } from './academicsyear.component';
import { AcademicsYearAddComponent } from './academicsyearadd.component';
import { AcademicsTermsComponent } from './academicsterms.component';
import { AcademicsTermsAddComponent } from './academicstermsadd.component';
import { StudentlistingComponent } from './studentlisting.component';
import { StudentaddComponent } from './studentadd.component';

@NgModule({
  imports: [
     CommonModule,FormsModule, HttpModule,
     AcademicsRoutingModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  declarations: [ AcademicsClassComponent,AcademicsClassAddComponent,AcademicsStreamComponent,AcademicsStreamAddComponent,AcademicsSubjectComponent,AcademicsSubjectAddComponent,AcademicsYearComponent,AcademicsYearAddComponent,AcademicsTermsComponent,AcademicsTermsAddComponent,StudentlistingComponent,StudentaddComponent ]
})
export class AcademicsModule { }

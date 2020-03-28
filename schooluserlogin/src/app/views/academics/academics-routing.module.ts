import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Academics'
    },
    children: [
      {
        path: '',
        redirectTo: 'classlisting'
      },
      {
        path: 'classlisting',
        component: AcademicsClassComponent,
        data: {
          title: 'Academics Class listing'
        }
      },
      {
        path: 'addclass',
		    component: AcademicsClassAddComponent,
        data: {
          title: 'Add Academics Class'
        }
      },
      {
        path: 'edit/:id',
		    component: AcademicsClassAddComponent,
        data: {
          title: 'Update Academics Class'
        }
      },
      {
        path: 'addstudent/:streamId',
		    component: StudentaddComponent,
        data: {
          title: 'Academics Add Student'
        }
      },
      {
        path: 'student/:streamId',
		    component: StudentlistingComponent,
        data: {
          title: 'Academics Student'
        }
      },
      {
        path: 'stream/:classId',
		    component: AcademicsStreamComponent,
        data: {
          title: 'Academics Stream'
        }
      },
      {
        path: 'addstream/:classId',
		    component: AcademicsStreamAddComponent,
        data: {
          title: 'Add Academics Stream'
        }
      },{
        path: 'subject/:levelId',
		    component: AcademicsSubjectComponent,
        data: {
          title: 'Academics Subject'
        }
      },
      {
        path: 'addsubject/:levelId',
		    component: AcademicsSubjectAddComponent,
        data: {
          title: 'Add Academics Subject'
        }
      },
      {
        path: 'yearlisting',
		    component: AcademicsYearComponent,
        data: {
          title: 'Add Academics Year'
        }
      },
      {
        path: 'addyear',
		    component: AcademicsYearAddComponent,
        data: {
          title: 'Add Academics Year'
        }
      },
      {
        path: 'edityear/:id',
		    component: AcademicsYearAddComponent,
        data: {
          title: 'Update Academics Year'
        }
      },
      {
        path: 'levellisting',
		    component: AcademicsTermsComponent,
        data: {
          title: 'Add Academics Level'
        }
      },
      {
        path: 'addlevel',
		    component: AcademicsTermsAddComponent,
        data: {
          title: 'Add Academics Level'
        }
      },
      {
        path: 'editlevel/:id',
		    component: AcademicsTermsAddComponent,
        data: {
          title: 'Update Academics Level'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicsRoutingModule {}

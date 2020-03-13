import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcademicsClassComponent } from './academicsclass.component';
import { AcademicsClassAddComponent } from './academicsclassadd.component';
import { AcademicsStreamComponent } from './academicsstream.component';
import { AcademicsStreamAddComponent } from './academicsstreamadd.component';
import { AcademicsSubjectComponent } from './academicssubject.component';
import { AcademicsSubjectAddComponent } from './academicssubjectadd.component';

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
        path: 'subject/:streamId',
		    component: AcademicsSubjectComponent,
        data: {
          title: 'Academics Subject'
        }
      },
      {
        path: 'addsubject/:streamId',
		    component: AcademicsSubjectAddComponent,
        data: {
          title: 'Add Academics Subject'
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

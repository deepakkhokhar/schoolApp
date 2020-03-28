import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentlistingComponent } from './studentlisting.component';
import { StudentaddComponent } from './studentadd.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Student'
    },
    children: [
      {
        path: '',
        redirectTo: 'listing'
      },
      {
        path: 'listing',
        component: StudentlistingComponent,
        data: {
          title: 'Student listing'
        }
      },
      {
        path: 'add',
        component: StudentaddComponent,
        data: {
          title: 'Student add'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {}

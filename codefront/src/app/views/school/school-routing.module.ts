import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchoolComponent } from './school.component';
import { AddSchoolComponent } from './schooladd.component';
import { AddSchoolUserComponent } from './schooladduser.component';
import { SchoolUsersComponent } from './schoolusers.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'School'
    },
    children: [
      {
        path: '',
        redirectTo: 'listing'
      },
      {
        path: 'listing',
        component: SchoolComponent,
        data: {
          title: 'School listing'
        }
      },
      {
        path: 'add',
		component: AddSchoolComponent,
        data: {
          title: 'Add School'
        }
      },
      {
        path: 'schoolUser/:id',
		component: SchoolUsersComponent,
        data: {
          title: 'School Users'
        }
      },
      {
        path: 'addSchoolUser/:id',
		component: AddSchoolUserComponent,
        data: {
          title: 'Add School User'
        }
      }
	  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule {}

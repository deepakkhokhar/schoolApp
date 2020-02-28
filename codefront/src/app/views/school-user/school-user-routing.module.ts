import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSchoolUserComponent } from './add-school-user/add-school-user.component';
import { SchoolUserLoginComponent } from './school-user-login/school-user-login.component';
import { SchoolUserListsComponent } from './school-user-lists/school-user-lists.component';
import { SchoolDashboardComponent } from '../school-dashboard/school-dashboard.component';
 

const routes: Routes = [
  {
    
    path: '',
    data: {
      title: 'School'
    },
    children: [
      {
        path: 'users',
        redirectTo: 'users'
      },
      {
        path: 'adduser',
        component: AddSchoolUserComponent,
        data: {
          title: 'User listing'
        }
      },
      //   {
      //   path: 'users',
      //   component: SchoolUserListsComponent,
      //   data: {
      //     title: 'Users Lists'
      //   }

      // }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolUserRoutingModule { }

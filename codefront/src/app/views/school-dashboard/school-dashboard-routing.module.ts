import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolDashboardComponent } from './school-dashboard.component';


const routes: Routes = [
  {
   
    path: '',
    data: {
      title: 'Dashboard'
    },

    children:[
      {
        path: 'dashboard',
        redirectTo: 'dashboard'
      },
      {
      path: '',
      component:SchoolDashboardComponent,
      data: {
        title: 'School Dashboard'
      }
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolDashboardRoutingModule { }

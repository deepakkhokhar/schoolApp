import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolEventComponent } from './schoolevent.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Event'
    },
    children: [
      {
        path: '',
        redirectTo: 'school'
      },
      {
        path: 'school',
        component: SchoolEventComponent,
        data: {
          title: 'School Event'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule {}

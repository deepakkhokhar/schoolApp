import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AdminListingComponent } from './admin-listing/admin-listing.component';
 
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Users'
    },
    children: [
      {
        path: '',
        redirectTo: 'listing'
      },
      {
        path: 'listing',
        component: AdminListingComponent,
        data: {
          title: 'List User'
        }
      },
      {
        path: 'register',
		    component: RegisterComponent,
        data: {
          title: 'Add User'
        }
      },
      {
        path: 'edit/:id',
		    component: RegisterComponent,
        data: {
          title: 'Update User'
        }
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { AccountAddComponent } from './accountadd.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listing'
  },
  {
    path: 'listing',
    component: AccountComponent,
    data: {
      title: 'Account listing'
    }
  },
  {
    path: 'add',
    component: AccountAddComponent,
    data: {
      title: 'Add Account'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {}

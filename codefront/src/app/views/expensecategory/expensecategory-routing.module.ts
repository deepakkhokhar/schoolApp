import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpenseCategoryComponent } from './expensecategory.component';
import { ExpenseCategoryAddComponent } from './expensecategoryadd.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Expense Category'
    },
    children: [
      {
        path: '',
        redirectTo: 'listing'
      },
      {
        path: 'listing',
        component: ExpenseCategoryComponent,
        data: {
          title: 'Expense Category listing'
        }
      },
      {
        path: 'add',
		component: ExpenseCategoryAddComponent,
        data: {
          title: 'Add Expense Category'
        }
      },
      {
        path: 'edit/:id',
		component: ExpenseCategoryAddComponent,
        data: {
          title: 'Update Expense Category'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseCategoryRoutingModule {}

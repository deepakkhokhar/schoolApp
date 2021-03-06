import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpensesComponent } from './expenses.component';
import { ExpenseAddComponent } from './expenseadd.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Expenses'
    },
    children: [
      {
        path: '',
        redirectTo: 'listing'
      },
      {
        path: 'listing',
        component: ExpensesComponent,
        data: {
          title: 'Expense listing'
        }
      },
      {
        path: 'add',
		    component: ExpenseAddComponent,
        data: {
          title: 'Add Expense'
        }
      },
      {
        path: 'edit/:id',
		    component: ExpenseAddComponent,
        data: {
          title: 'Update Expense'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensesRoutingModule {}

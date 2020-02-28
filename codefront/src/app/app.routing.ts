import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AuthGuard } from "./auth-guard.service";
import { SchoolUserLoginComponent } from './views/school-user/school-user-login/school-user-login.component';
import { SchoolLayoutComponent } from './containers/school-layout/school-layout.component';
import { SchoolAuthGuardService } from './school-auth-guard.service';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'schools/login',
    component: SchoolUserLoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
	  canActivate: [AuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
	  {
        path: 'school',
        loadChildren: () => import('./views/school/school.module').then(m => m.SchoolModule)
      },
      {
        path: 'account',
        loadChildren: () => import('./views/account/account.module').then(m => m.AccountModule)
      },
      {
        path: 'expenses',
        loadChildren: () => import('./views/expenses/expenses.module').then(m => m.ExpensesModule)
      },
      {
        path: 'expensecategory',
        loadChildren: () => import('./views/expensecategory/expensecategory.module').then(m => m.ExpenseCategoryModule)
      },
      {
        path: 'reports',
        loadChildren: () => import('./views/reports/reports.module').then(m => m.ReportsModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      },
       
    ]
  },

  {
    path: 'schools',
    component: SchoolLayoutComponent,
	  canActivate: [SchoolAuthGuardService],
    data: {
      title: 'School Home', 
    },
    children: [
     
      {
        path: 'users',
        loadChildren: () => import('../app/views/school-user/school-user.module').then(m =>m.SchoolUserModule)
      },
      {
      path: 'dashboard',
      loadChildren: () => import('./views/school-dashboard/school-dashboard.module').then(m => m.SchoolDashboardModule)
    },
    ]
  },

  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [AuthGuard]
})
export class AppRoutingModule {}

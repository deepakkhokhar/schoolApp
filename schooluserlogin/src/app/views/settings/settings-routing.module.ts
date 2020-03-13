import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';
import { SettingAccountComponent } from './settingaccount.component';
import { SettingUserRoleComponent } from './settingsuserrole.component';
import { SettingThemeColorComponent } from './settingsthemecolor.component';
import { AddSchoolUserComponent } from './addschooluser.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'schoolprofile'
  },
  {
    path: 'schoolprofile',
    component: SettingsComponent,
    data: {
      title: 'School Profile'
    }
  },
  {
    path: 'schoolaccount',
    component: SettingAccountComponent,
    data: {
      title: 'School Account'
    }
  },
  {
    path: 'userrolepermission',
    component: SettingUserRoleComponent,
    data: {
      title: 'User Role Permission'
    }
  },
  {
    path: 'addSchoolUser',
    component: AddSchoolUserComponent,
    data: {
      title: 'Add School User'
    }
  },
  {
    path: 'editschoolUser/:id',
    component: AddSchoolUserComponent,
    data: {
      title: 'Update School User'
    }
  },
  {
    path: 'themecolors',
    component: SettingThemeColorComponent,
    data: {
      title: 'Theme Color'
    }
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}

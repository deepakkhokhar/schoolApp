import { CommonModule } from '@angular/common'; 
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { ColorPickerModule } from 'ngx-color-picker';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { SettingsRoutingModule } from './settings-routing.module';
import { AlertModule } from 'ngx-bootstrap/alert';
import { SettingsComponent } from './settings.component';
import { SettingAccountComponent } from './settingaccount.component';
import { SettingUserRoleComponent } from './settingsuserrole.component';
import { SettingThemeColorComponent } from './settingsthemecolor.component';
import { AddSchoolUserComponent } from './addschooluser.component';
import { DatePipe } from '@angular/common';

@NgModule({
  imports: [
     CommonModule,FormsModule, HttpModule,
     SettingsRoutingModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    ColorPickerModule
  ],
  declarations: [ SettingsComponent,SettingAccountComponent,SettingUserRoleComponent,SettingThemeColorComponent,AddSchoolUserComponent ],
  providers: [DatePipe]
})
export class SettingsModule { }

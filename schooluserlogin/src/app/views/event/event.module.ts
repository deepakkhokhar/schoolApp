import { CommonModule } from '@angular/common'; 
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { EventRoutingModule } from './event-routing.module';
import { AlertModule } from 'ngx-bootstrap/alert';
import { FullCalendarModule } from '@fullcalendar/angular';
import { SchoolEventComponent } from './schoolevent.component';

@NgModule({
  imports: [
     CommonModule,FormsModule, HttpModule,
     EventRoutingModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    FullCalendarModule
  ],
  declarations: [SchoolEventComponent ]
})
export class EventModule { }

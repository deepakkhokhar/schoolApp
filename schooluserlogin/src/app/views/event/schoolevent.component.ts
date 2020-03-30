import { Component,OnInit, ViewChild } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http'; 
import { Calendar } from '@fullcalendar/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';



@Component({
  templateUrl: 'schoolevent.component.html'
})
export class SchoolEventComponent  implements OnInit {

    @ViewChild('calendar') calendarComponent: FullCalendarComponent;  
 
  public studentlistingData;
  alertsDismiss: any = [];
  calendarPlugins:any;
  calendarEvents = [
    { title: 'event 1', date: '2020-03-20' }
  ];
  constructor(private http: HttpClient,private router:Router,private activatedRoute:ActivatedRoute) {}
  ngOnInit() { 

      this.calendarPlugins = [interactionPlugin,dayGridPlugin,timeGridPlugin,listPlugin];
     
  }

  

  addEvent(date) {
    this.calendarEvents.push({ title: 'event 2', date: date });
    return;
  } 

  handleDateClick(arg) { // handler method
    //alert();
    this.addEvent(arg.dateStr);
  }
}


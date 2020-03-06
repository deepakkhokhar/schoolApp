import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  templateUrl: 'settingsuserrole.component.html'
})
export class SettingUserRoleComponent  implements OnInit {
  
  alertsDismiss: any = [];
  constructor(private http: HttpClient,private router:Router) {}
  ngOnInit() { 
    
   }
  
}

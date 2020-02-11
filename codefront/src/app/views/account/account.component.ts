import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  templateUrl: 'account.component.html'
})
export class AccountComponent  implements OnInit {
  public schoolData;
  alertsDismiss: any = [];
  constructor(private http: HttpClient,private router:Router) {}
  ngOnInit() { 
    
   }
  
}

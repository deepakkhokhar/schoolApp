import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  templateUrl: 'expenses.component.html'
})
export class ExpensesComponent  implements OnInit {
  
  alertsDismiss: any = [];
  constructor(private http: HttpClient,private router:Router) {}
  ngOnInit() { 
    
   }
  
}

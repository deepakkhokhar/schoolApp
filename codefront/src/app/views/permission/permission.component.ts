import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  templateUrl: 'permission.component.html'
})
export class PermissionComponent  implements OnInit {
  
  alertsDismiss: any = [];
  schoolAddVal:boolean=true;
  accountAddVal:boolean=true;
  expenseCategoryAddVal:boolean=true;
  expenseAddVal:boolean=true;
  adminpermission:any=[];
  constructor(private http: HttpClient,private router:Router) {}
  ngOnInit() { 
    this.http.get<any>('http://localhost:3000/permission/getManagerPermission').subscribe(data => {
     console.log(data);
     if(data.status==200){
       this.adminpermission=data.data;
     }
    })
    
   }
  
}

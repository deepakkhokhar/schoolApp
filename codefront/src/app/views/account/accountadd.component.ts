import {Component,ViewChild,ChangeDetectorRef, OnInit} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  templateUrl: 'accountadd.component.html'
})
export class AccountAddComponent  implements OnInit {
    schoolData:any;
    alertsDismiss: any = [];
    constructor(private http: HttpClient,private router:Router,private activatedRoute:ActivatedRoute) {}
  ngOnInit() { 
    this.http.get<any>('http://localhost:3000/school/getAllSchool').subscribe(data => {
        if(data.status==200){
          this.schoolData=data.data;
          
        }
     });
  }
  submit(value: any) {
    var retrievedObject = localStorage.getItem('userInfo');
    var user=JSON.parse(retrievedObject);
    value.adminId=user._id;
    this.http.post<any>('http://localhost:3000/account/addAccount', value).subscribe(data => {
        console.log(data);
          if(data.status==200){
         
        this.alertsDismiss.push({
          type: 'success',
          msg: `Account created successfully`,
          timeout: 3000
        });
        
        this.router.navigate( [ "account/listing" ] );   
          
      }
      },error=>{
    console.log("Error", error); 
    this.alertsDismiss.push({
      type: 'danger',
      msg: error,
      timeout: 5000
    });
      })
  }
}
import {Component,ViewChild,ChangeDetectorRef, OnInit} from '@angular/core';

import {Router,ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  templateUrl: 'addschooluser.component.html'
})
export class AddSchoolUserComponent implements OnInit {
  schoolId:any;
  userId:any;
  contact: any;
  alertsDismiss: any = [];
  firstNameVal:any;
  lastNameVal:any;
  userNameVal:any;
  emailaddressVal:any;
  passwordVal:any;
  usertypeVal:any;
    constructor(private http: HttpClient,private route:Router,private cd: ChangeDetectorRef,private activatedRoute:ActivatedRoute) {
        this.schoolId=this.activatedRoute.snapshot.paramMap.get("id");
      
    }
    
    ngOnInit(): void {
      this.http.get<any>('http://localhost:3000/school/getSchoolUser/'+this.schoolId).subscribe(data => {
       console.log(data);
       if(data.status==200){
        
         this.lastNameVal=data.data.lastName;
         console.log(data.data);
         this.firstNameVal = data.data.firstName;
         this.userNameVal=data.data.userName;
         this.emailaddressVal=data.data.emailaddress;
         this.passwordVal=data.data.password;
         this.usertypeVal=data.data.usertype;
       }
      })
    
    }
    submit(value: any) {
        var retrievedObject = localStorage.getItem('userInfo');
        var user=JSON.parse(retrievedObject);
      if(this.schoolId){
        this.http.post<any>('http://localhost:3000/school/updateSchoolUser', {'schooluserId':this.schoolId,'formvalue':value}).subscribe(data => {
		    if(data.status==200){
           
          this.alertsDismiss.push({
            type: 'success',
            msg: `SchoolUser updated successfully`,
            timeout: 3000
          });
          
          this.route.navigate( [ '/settings/userrolepermission' ] );    
            
        }
        },error=>{
      console.log("Error", error); 
      this.alertsDismiss.push({
        type: 'danger',
        msg: error,
        timeout: 5000
      });
		})
      }else{
      
      this.http.post<any>('http://localhost:3000/school/addSchoolUser', {'schooluserId':user._id,'schoolId':user.schoolId,'formvalue':value}).subscribe(data => {
	if(data.status==200){
           
          this.alertsDismiss.push({
            type: 'success',
            msg: `SchoolUser created successfully`,
            timeout: 3000
          });
          
          this.route.navigate( [ '/settings/userrolepermission' ] );   
            
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
    
}
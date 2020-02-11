import {Component,ViewChild,ChangeDetectorRef, OnInit} from '@angular/core';

import {Router,ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  templateUrl: 'schooladduser.component.html'
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
      this.userId=this.activatedRoute.snapshot.paramMap.get("userid");
      
      this.schoolId=this.activatedRoute.snapshot.paramMap.get("id");
      
    }
    
    ngOnInit(): void {
      
      if(this.userId){
      console.log('http://localhost:3000/school/getSchoolUser/'+this.userId);
      this.http.get<any>('http://localhost:3000/school/getSchoolUser/'+this.userId).subscribe(data => {
       
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
    }
    submit(value: any) {
      
      if(this.userId){
        this.http.post<any>('http://localhost:3000/school/updateSchoolUser', {'schooluserId':this.userId,'formvalue':value}).subscribe(data => {
		    if(data.status==200){
           
          this.alertsDismiss.push({
            type: 'success',
            msg: `SchoolUser updated successfully`,
            timeout: 3000
          });
          
          this.route.navigate( [ "school/schoolUser/"+this.schoolId ] );   
            
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
      var retrievedObject = localStorage.getItem('userInfo');
      var user=JSON.parse(retrievedObject);
      this.http.post<any>('http://localhost:3000/school/addSchoolUser', {'adminId':user._id,'schoolId':this.schoolId,'formvalue':value}).subscribe(data => {
		    if(data.status==200){
           
          this.alertsDismiss.push({
            type: 'success',
            msg: `SchoolUser created successfully`,
            timeout: 3000
          });
          
          this.route.navigate( [ "school/schoolUser/"+this.schoolId ] );   
            
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
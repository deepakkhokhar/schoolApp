import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  templateUrl: 'settingaccount.component.html'
})
export class SettingAccountComponent  implements OnInit {
  
  alertsDismiss: any = [];
  fullNameVal:string;
  regNoVal:string;
  regDateVal:any;
  emailaddressVal:any;
  addressVal:any;
  cityVal:any;
  countryVal:any;
  statusVal:boolean;
  phonenumberVal:any;
  amountVal:any;
  payVal:boolean;
  imgURL: any;
  constructor(public datepipe: DatePipe,private http: HttpClient,private router:Router) {}
  ngOnInit() { 
    var retrievedObject = localStorage.getItem('userInfo');
    var user=JSON.parse(retrievedObject);
    if(user.schoolId){
      this.http.get<any>('http://localhost:3000/school/getSchool/'+user.schoolId).subscribe(data => {
     
     if(data.status==200){
       console.log(data.data);
      this.regDateVal=this.datepipe.transform(data.data.registrationDate, 'yyyy-MM-dd');
      this.fullNameVal=data.data.name;
       this.regNoVal=data.data.registrationNumber;
       
       this.phonenumberVal=data.data.phoneNumber;
       this.emailaddressVal=data.data.email;
       this.addressVal=data.data.address;
       this.cityVal=data.data.city;
       this.countryVal=data.data.country;
       this.imgURL=data.data.logo;
       this.statusVal=data.data.isActive;
       this.amountVal=data.data.amount;
       this.payVal=data.data.pay;
     }
    })
    }
    
   }
  
}

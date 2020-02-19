import {Component,ViewChild,ChangeDetectorRef, OnInit} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
@Component({
  templateUrl: 'schooladd.component.html'
})
export class AddSchoolComponent implements OnInit {
  schoolId:any;
  public imagePath;
  imgURL: any;
  public fd= new FormData();
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
  constructor(public datepipe: DatePipe,private http: HttpClient,private router:Router,private cd: ChangeDetectorRef,private activatedRoute:ActivatedRoute) {
    this.schoolId=this.activatedRoute.snapshot.paramMap.get("id");
  }
  ngOnInit(): void {
    this.statusVal=true;  
    this.payVal=false;
    if(this.schoolId){
    
    this.http.get<any>('http://localhost:3000/school/getSchool/'+this.schoolId).subscribe(data => {
     
     if(data.status==200){
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
  
  

  preview(files) {
    
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      alert("Only images are supported.");
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      
      this.imgURL = reader.result; 
      this.fd.delete('file');
      this.fd.append('file', files[0], files[0].name);
    }
  }

  submit(value: any) {
    var retrievedObject = localStorage.getItem('userInfo');
    var user=JSON.parse(retrievedObject);
    
    this.fd.delete('fullName');
    this.fd.delete('adminId');
    this.fd.delete('regNo');
    this.fd.delete('regDate');
    this.fd.delete('phonenumber');
    this.fd.delete('emailaddress');
    this.fd.delete('address');
    this.fd.delete('city');
    this.fd.delete('country');
    this.fd.delete('amount');
    this.fd.delete('status');
    this.fd.delete('pay');
    this.fd.append('fullName',value.fullName);
    this.fd.append('regNo',value.regNo);
    this.fd.append('regDate',value.regDate);
    this.fd.append('phonenumber',value.phonenumber);
    this.fd.append('emailaddress',value.emailaddress);
    this.fd.append('address',value.address);
    this.fd.append('city',value.city);
    this.fd.append('country',value.country);
    this.fd.append('amount',value.amount);
    this.fd.append('status',value.status);
    this.fd.append('adminId',user._id);
    this.fd.append('pay',value.pay);
    if(this.schoolId){
      this.http.post<any>('http://localhost:3000/school/updateSchool/'+this.schoolId, this.fd).subscribe(data => {
		    if(data.status==200){
          this.alertsDismiss.push({
            type: 'success',
            msg: `School updated successfully`,
            timeout: 10000
          });
          
          this.router.navigate(['school']);
        
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
      this.http.post<any>('http://localhost:3000/school/addSchool', this.fd).subscribe(data => {
		    if(data.status==200){
          this.alertsDismiss.push({
            type: 'success',
            msg: `School created successfully`,
            timeout: 10000
          });
          
          this.router.navigate(['school']);
        
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

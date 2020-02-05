import {Component,ChangeDetectorRef} from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: 'schooladd.component.html'
})
export class AddSchoolComponent {
  
  public imagePath;
  imgURL: any;
  public fd= new FormData();
  constructor(private http: HttpClient,private router:Router,private cd: ChangeDetectorRef) {}
  alertsDismiss: any = [];
  

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
    this.fd.append('fullName',value.fullName);
    this.fd.append('regNo',value.regNo);
    this.fd.append('regDate',value.regDate);
    this.fd.append('phonenumber',value.phonenumber);
    this.fd.append('emailaddress',value.emailaddress);
    this.fd.append('address',value.address);
    this.fd.append('city',value.city);
    this.fd.append('country',value.country);
    this.fd.append('adminId',user._id);
    this.http.post<any>('http://localhost:3000/school/addSchool', this.fd).subscribe(data => {
		    if(data.status==200){
          this.alertsDismiss.push({
            type: 'success',
            msg: `School created successfully`,
            timeout: 10000
          });
          setTimeout(function(){
          this.router.navigate(['school']);
        }, 8000);
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

import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
  

})
export class LoginComponent { 
 
 constructor(private http: HttpClient,private router:Router) {}
 
 alertsDismiss: any = [];
 submit(value: any) {
    console.log(value);
	this.http.post<any>('http://localhost:3000/admin/login', value).subscribe(data => {
		    
			if(data.status==100){
			
             this.alertsDismiss.push({
				  type: 'danger',
				  msg: `Error found`,
				  timeout: 5000
				});			
			}else if(data.status==201){
				
				this.alertsDismiss.push({
				  type: 'danger',
				  msg: `Invalid username and password`,
				  timeout: 5000
				});
			}else{
				this.alertsDismiss.push({
				  type: 'success',
				  msg: `Successful login`,
				  timeout: 5000
				});
				
				localStorage.setItem("userInfo", JSON.stringify(data.user));
				localStorage.setItem("userToken", JSON.stringify(data.token));
				this.router.navigate(['dashboard']);
			}
        },error=>{
			console.log("Error", error); 
		}) 
	
	
  }
}

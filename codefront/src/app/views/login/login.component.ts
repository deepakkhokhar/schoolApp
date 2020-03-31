import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertService } from '../services/alert.service';
import { AdminUserService } from '../services/admin-user.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
  

})
export class LoginComponent { 
 loginForm: FormGroup;
 alerts :any

 constructor(private fb: FormBuilder,
   private userService:AdminUserService,
   private router: Router,
   private alertService:AlertService
  
   ) {
	
   }

   ngOnInit(): void {
    this.loginFormBuilder()
  }

  loginFormBuilder(){
   
	this.loginForm = this.fb.group(
	  {
		username: ["",Validators.required],
		password: ["",Validators.required],
	  }
	);
  }
  

  onSubmit() {
	if (!this.loginForm.invalid) {
		this.userService.loginUser(this.loginForm.value).subscribe(data => {
		  if (data.status == 200 ) {
			this.alerts=this.alertService.alert("success",data.message,5000);
			localStorage.setItem("userInfo", JSON.stringify(data.user));
			localStorage.setItem("userToken", JSON.stringify(data.token));
			this.router.navigate(["dashboard"]);
		  } else{
			this.alerts=this.alertService.alert("danger",data.message,5000);
		  }
		});
	  
	}
  
	console.log(this.loginForm.value)
  }
 
}

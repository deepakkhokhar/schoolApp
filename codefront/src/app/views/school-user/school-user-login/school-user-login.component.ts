import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SchoolUserService } from '../school-user.service';
import { AlertService } from '../../../alert.service';

@Component({
  selector: 'app-school-user-login',
  templateUrl: './school-user-login.component.html',
  styleUrls: ['./school-user-login.component.css']
})
export class SchoolUserLoginComponent implements OnInit {

  loginForm: FormGroup;
  alerts :any
  constructor(private fb: FormBuilder,
    private userService:SchoolUserService,
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
      this.userService.loginUser(this.loginForm.value).subscribe(user => {
        console.log(user.authToken);
        console.log(user.message);
        if (user.status == 200 ) {
          this.alerts=this.alertService.alert("success",user.message,5000);
          localStorage.setItem("schoolUserInfo", JSON.stringify(user.authToken));
          this.router.navigate(["/schools/dashboard"]);
        } else{
          this.alerts=this.alertService.alert("danger",user.message,5000);
        }
      });
    
  }

  console.log(this.loginForm.value)
}

}


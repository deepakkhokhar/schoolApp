import { Component, OnInit } from '@angular/core';
import { CustomValidators } from 'ng2-validation';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AdminUserService } from '../../services/admin-user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../services/alert.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    alerts :any
    userId:any;
    isUpdatedRecord=false
    public usersRoles = [{  /* 1 for admin,2 Manager,3 School Officer*/
      name: "Admin",
      value: 1
  }, {
      name: "Manager",
      value: 2
  },
  {
    name: "School Officer",
    value: 3
} 
];
   
    constructor(private fb: FormBuilder,
      private userService:AdminUserService,
      private router: Router,
      private alertService:AlertService,
      private route:ActivatedRoute,
       
     
      ) {
     
      }
   
      ngOnInit(): void {
        this.userId=this.route.snapshot.paramMap.get("id");
       if(this.userId){
        this.isUpdatedRecord=true;
        this.userService.viewUser(this.userId).subscribe(user=>{
        this.registerFormBuilder(user.data);
        }) 
       }
       this.registerFormBuilder(null);
      
     }
 
     registerFormBuilder(item:any){
      const password = new FormControl(item?item.password:'', [ Validators.required, Validators.minLength(6)]);
     this.registerForm = this.fb.group(
       {
       userName: [item?item.userName:'',[Validators.required,Validators.minLength(4)]],
       firstName:[item?item.firstName:'',Validators.required],
       lastName: [item?item.lastName:'',Validators.required],
       email:    [item?item.email:'',Validators.email],
       role:     [item?item.role:'',Validators.required],
       isActive: [item?item.isActive:''],
       password: password,
       confirmPassword: [item?item.password:'',CustomValidators.equalTo(password)],
       }
     );
     }
  onSubmit() {
    if (!this.registerForm.invalid) {
      this.userId=this.route.snapshot.paramMap.get("id");
      if(this.userId){
       
        this.userService.updateUser(this.userId,this.registerForm.value).subscribe(data => {
          if (data.status == 200 ) {
          console.log(this.registerForm.value)
          this.alerts=this.alertService.alert("success",data.message,3000);
          setTimeout(()=>
          { 
            this.router.navigate(["admin/listing"]);
           }
          ,2000);
          } else{
          this.alerts=this.alertService.alert("danger",data.message,3000);
          }
        });
      
      }else {
        this.userService.addUser(this.registerForm.value).subscribe(data => {
          if (data.status == 200 ) {
          this.alerts=this.alertService.alert("success",data.message,3000);  
          setTimeout(()=>
            { 
              this.router.navigate(["admin/listing"]);
          }
            ,2000);
          } else{
          this.alerts=this.alertService.alert("danger",data.message,3000);
          }
        });
      }
    }
    }
   
}

import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  templateUrl: 'settingsuserrole.component.html'
})
export class SettingUserRoleComponent  implements OnInit {
  
  alertsDismiss: any = [];
  public schoolData:any;
  constructor(private http: HttpClient,private router:Router) {}
  ngOnInit() { 
    var retrievedObject = localStorage.getItem('userInfo');
      var user=JSON.parse(retrievedObject);
      this.http.get<any>('http://localhost:3000/school/getAllSchoolUser/'+user.schoolId).subscribe(data => {
     console.log(data); 
     if(data.status==200){
       this.schoolData=data.data;
     }
    })
   }

   deleteSchoolUser(_id: string) {
    if(confirm("Are you sure to delete this school user?")) {
      this.http.delete<any>('http://localhost:3000/school/deleteuser/'+_id).subscribe(data => {
		  console.log(data);
			if(data.status==100){
			
        this.alertsDismiss.push({
				  type: 'danger',
				  msg: `Error found`,
				  timeout: 5000
				});			
			}else{
				this.alertsDismiss.push({
				  type: 'success',
				  msg: `School User Removed Sucessfully.`,
				  timeout: 5000
				});
				
				
			}
        },error=>{
			console.log("Error", error); 
		}) 
    }
  }
  
}

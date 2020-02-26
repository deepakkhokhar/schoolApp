import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  templateUrl: 'school.component.html'
})
export class SchoolComponent  implements OnInit {
  public schoolData;
  public displaymodule: boolean=true;
  alertsDismiss: any = [];
  constructor(private http: HttpClient,private router:Router) {}
  ngOnInit() { 
    var retrievedObject = localStorage.getItem('userInfo');
    var user=JSON.parse(retrievedObject);
    if(user.role==2){
      this.displaymodule=false;
    }
    this.http.get<any>('http://localhost:3000/school/getAllSchool').subscribe(data => {
     console.log(data);
     if(data.status==200){
       this.schoolData=data.data;
     }
    })
   }
   deleteSchool(_id: string,name:string) {
    if(confirm("Are you sure to delete "+name+"?")) {
      this.http.delete<any>('http://localhost:3000/school/delete/'+_id).subscribe(data => {
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
				  msg: `School Removed Sucessfully.`,
				  timeout: 5000
				});
				
				
			}
        },error=>{
			console.log("Error", error); 
		}) 
    }
  }
}

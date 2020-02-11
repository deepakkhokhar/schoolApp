import {Component,ChangeDetectorRef, OnInit} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  templateUrl: 'schoolusers.component.html'
})
export class SchoolUsersComponent  implements OnInit {
    public schoolData;
    schoolId:any;
    
    alertsDismiss: any = [];
    constructor(private http: HttpClient,private router:Router,private activatedRoute:ActivatedRoute) {
      
        this.schoolId=this.activatedRoute.snapshot.paramMap.get("id");
    }
    ngOnInit() { 
    this.http.get<any>('http://localhost:3000/school/getAllSchoolUser/'+this.schoolId).subscribe(data => {
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
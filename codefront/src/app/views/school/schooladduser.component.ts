import {Component,ChangeDetectorRef} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  templateUrl: 'schooladduser.component.html'
})
export class AddSchoolUserComponent {
  schoolId:any;
  
  
    constructor(private http: HttpClient,private route:Router,private cd: ChangeDetectorRef,private activatedRoute:ActivatedRoute) {
      this.schoolId=this.activatedRoute.snapshot.paramMap.get("id");
      
    }
    alertsDismiss: any = [];
    submit(value: any) {
      console.log(value);
      
      var retrievedObject = localStorage.getItem('userInfo');
      var user=JSON.parse(retrievedObject);
      this.http.post<any>('http://localhost:3000/school/addSchoolUser', {'adminId':user._id,'schoolId':this.schoolId,'formvalue':value}).subscribe(data => {
		    if(data.status==200){
           
          this.alertsDismiss.push({
            type: 'success',
            msg: `SchoolUser created successfully`,
            timeout: 3000
          });
          
          this.route.navigate( [ "school" ] );   
            
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
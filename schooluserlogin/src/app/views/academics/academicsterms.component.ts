import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  templateUrl: 'academicsterms.component.html'
})
export class AcademicsTermsComponent  implements OnInit {
  alertsDismiss: any = [];
  public termlistingData;
  constructor(private http: HttpClient,private router:Router) {}
  ngOnInit() { 
    var retrievedObject = localStorage.getItem('userInfo');
      var user=JSON.parse(retrievedObject);
      this.http.get<any>('http://localhost:3000/academic/getlevel/'+user._id).subscribe(data => {
     console.log(data);
     if(data.status==200){
       this.termlistingData=data.data;
     }
    })
   }

   deleteAcademicsTerm(_id: string) {
    if(confirm("Are you sure to delete this level?")) {
      this.http.delete<any>('http://localhost:3000/academic/deletelevel/'+_id).subscribe(data => {
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
				  msg: `Level Removed Sucessfully.`,
				  timeout: 5000
				});
				
				
			}
        },error=>{
			console.log("Error", error); 
		}) 
    }
  }

  
}

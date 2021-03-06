import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  templateUrl: 'academicsyear.component.html'
})
export class AcademicsYearComponent  implements OnInit {
  
  public yearlistingData;
  alertsDismiss: any = [];
  constructor(private http: HttpClient,private router:Router) {}
  ngOnInit() { 
    var retrievedObject = localStorage.getItem('userInfo');
      var user=JSON.parse(retrievedObject);
    this.http.get<any>('http://localhost:3000/academic/getyear/'+user._id).subscribe(data => {
     console.log(data);
     if(data.status==200){
       this.yearlistingData=data.data;
     }
    })
   }
   deleteAcademicsYear(_id: string,name:string) {
    if(confirm("Are you sure to delete "+name+"?")) {
      this.http.delete<any>('http://localhost:3000/academic/deleteyear/'+_id).subscribe(data => {
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
				  msg: `Year Removed Sucessfully.`,
				  timeout: 5000
				});
				
				
			}
        },error=>{
			console.log("Error", error); 
		}) 
    }
  }
  
}

import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  templateUrl: 'account.component.html'
})
export class AccountComponent  implements OnInit {
  public accountData;
  alertsDismiss: any = [];
  constructor(private http: HttpClient,private router:Router) {}
  ngOnInit() { 
    var retrievedObject = localStorage.getItem('userInfo');
    var user=JSON.parse(retrievedObject);
    
    this.http.get<any>('http://localhost:3000/account/getAllAccount/'+user._id).subscribe(data => {
     console.log(data); 
     if(data.status==200){
       this.accountData=data.data;
     }
    })
    
   }

   deleteAccount(_id: string,name:string) {
    if(confirm("Are you sure to delete this entry for "+name+"?")) {
      this.http.delete<any>('http://localhost:3000/account/delete/'+_id).subscribe(data => {
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
				  msg: `SchoolAccount credit/debit entry Removed Sucessfully.`,
				  timeout: 5000
				});
				
				
			}
        },error=>{
			console.log("Error", error); 
		}) 
    }
  }
  
}

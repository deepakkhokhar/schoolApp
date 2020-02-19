import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  templateUrl: 'expensecategory.component.html'
})
export class ExpenseCategoryComponent  implements OnInit {
  
  public expenseCategoryData;
  alertsDismiss: any = [];
  constructor(private http: HttpClient,private router:Router) {}
  ngOnInit() { 
    this.http.get<any>('http://localhost:3000/expensecategory/getAllExpense').subscribe(data => {
     console.log(data);
     if(data.status==200){
       this.expenseCategoryData=data.data;
     }
    })
   }
   deleteExpenseCategory(_id: string,name:string) {
    if(confirm("Are you sure to delete "+name+"?")) {
      this.http.delete<any>('http://localhost:3000/expensecategory/delete/'+_id).subscribe(data => {
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
				  msg: `ExpenseCategory Removed Sucessfully.`,
				  timeout: 5000
				});
				
				
			}
        },error=>{
			console.log("Error", error); 
		}) 
    }
  }
  
}

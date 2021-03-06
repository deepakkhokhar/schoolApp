import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  templateUrl: 'expenses.component.html'
})
export class ExpensesComponent  implements OnInit {
  
  public expenseData;
  alertsDismiss: any = [];
  constructor(private http: HttpClient,private router:Router) {}
  ngOnInit() { 
    
    this.http.get<any>('http://localhost:3000/expense/getAllExpense').subscribe(data => {
     console.log(data);
     if(data.status==200){
       this.expenseData=data.data;
     }
    })
   }
   deleteExpense(_id: string,name:string) {
    if(confirm("Are you sure to delete "+name+"?")) {
      this.http.delete<any>('http://localhost:3000/expense/delete/'+_id).subscribe(data => {
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
				  msg: `Expense Removed Sucessfully.`,
				  timeout: 5000
				});
				
				
			}
        },error=>{
			console.log("Error", error); 
		}) 
    }
  }
  
}

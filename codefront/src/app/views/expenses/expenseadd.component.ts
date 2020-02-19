import {Component,ViewChild,ChangeDetectorRef, OnInit} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  templateUrl: 'expenseadd.component.html'
})
export class ExpenseAddComponent  implements OnInit {
    alertsDismiss: any = [];
    expenseCategoryData:any;
    schoolData:any;
    expenseId:any;
    nameVal:any;
    schoolVal:any;
    categoryVal:any;
    amountVal:any;
    payerVal:any;
    payeeVal:any;
    descriptionVal:any;
  constructor(private http: HttpClient,private router:Router,private activatedRoute:ActivatedRoute) {}
  ngOnInit() { 
    this.expenseId=this.activatedRoute.snapshot.paramMap.get("id");
    if(this.expenseId){
      
      this.http.get<any>('http://localhost:3000/expense/getExpense/'+this.expenseId).subscribe(data => {
       
       if(data.status==200){
        
         this.nameVal=data.data.name;
         this.schoolVal=data.data.schoolId;
         this.amountVal=data.data.amount;
         this.payeeVal=data.data.payee;
         this.payerVal=data.data.payer;
         this.descriptionVal = data.data.description;
         this.categoryVal=data.data.expensecategoryId;
         
       }
      })
    } 
    this.http.get<any>('http://localhost:3000/expensecategory/getAllExpense').subscribe(data => {
      if(data.status==200){
        this.expenseCategoryData=data.data;
        
      }
   });

   this.http.get<any>('http://localhost:3000/school/getAllSchool').subscribe(data => {
      if(data.status==200){
        this.schoolData=data.data;
        
      }
   });

  }

  submit(value: any) {
    if(this.expenseId){
      this.http.post<any>('http://localhost:3000/expense/updateExpense', {'expenseId':this.expenseId,'formvalue':value}).subscribe(data => {
      if(data.status==200){
         
        this.alertsDismiss.push({
          type: 'success',
          msg: `Expense  updated successfully`,
          timeout: 3000
        });
        
        this.router.navigate( [ '/expenses/listing' ] );   
          
      }
      },error=>{
    console.log("Error", error); 
    this.alertsDismiss.push({
      type: 'danger',
      msg: error,
      timeout: 5000
    });
  })
    }else{
    var retrievedObject = localStorage.getItem('userInfo');
      var user=JSON.parse(retrievedObject);
      this.http.post<any>('http://localhost:3000/expense/addExpense', {'adminId':user._id,'formvalue':value}).subscribe(data => {
		    if(data.status==200){
           
          this.alertsDismiss.push({
            type: 'success',
            msg: `Expense  created successfully`,
            timeout: 3000
          });
          
          this.router.navigate( [ '/expenses/listing' ] );   
            
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
}

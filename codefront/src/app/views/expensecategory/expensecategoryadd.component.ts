import {Component,ViewChild,ChangeDetectorRef, OnInit} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  templateUrl: 'expensecategoryadd.component.html'
})
export class ExpenseCategoryAddComponent  implements OnInit {
  alertsDismiss: any = [];
  nameVal:any;
  QuantityVal:any;
  descriptionVal:any;
  expenseCategoryId:any;
  constructor(private http: HttpClient,private router:Router,private activatedRoute:ActivatedRoute) {}
  ngOnInit() { 
    this.expenseCategoryId=this.activatedRoute.snapshot.paramMap.get("id");
    if(this.expenseCategoryId){
      
      this.http.get<any>('http://localhost:3000/expensecategory/getExpensecategory/'+this.expenseCategoryId).subscribe(data => {
       
       if(data.status==200){
        
         this.nameVal=data.data.name;
         console.log(data.data);
         this.descriptionVal = data.data.description;
         this.QuantityVal=data.data.quantity;
         
       }
      })
    } 
  }

  submit(value: any) {
    if(this.expenseCategoryId){
      this.http.post<any>('http://localhost:3000/expensecategory/updateExpenseCategory', {'expenseCategoryId':this.expenseCategoryId,'formvalue':value}).subscribe(data => {
      if(data.status==200){
         
        this.alertsDismiss.push({
          type: 'success',
          msg: `Expense category updated successfully`,
          timeout: 3000
        });
        
        this.router.navigate( [ '/expensecategory/listing' ] );   
          
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
      this.http.post<any>('http://localhost:3000/expensecategory/addExpenseCategory', {'adminId':user._id,'formvalue':value}).subscribe(data => {
		    if(data.status==200){
           
          this.alertsDismiss.push({
            type: 'success',
            msg: `Expense category created successfully`,
            timeout: 3000
          });
          
          this.router.navigate( [ '/expensecategory/listing' ] );   
            
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
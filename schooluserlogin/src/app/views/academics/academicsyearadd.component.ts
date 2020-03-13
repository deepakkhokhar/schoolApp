import {Component,ViewChild,ChangeDetectorRef, OnInit} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  templateUrl: 'academicsyearadd.component.html'
}) 
export class AcademicsYearAddComponent  implements OnInit {
  alertsDismiss: any = [];
  yearNameVal:any;
  yearId:any;
  constructor(private http: HttpClient,private router:Router,private activatedRoute:ActivatedRoute) {}
  ngOnInit() { 
    this.yearId=this.activatedRoute.snapshot.paramMap.get("id");
    if(this.yearId){
      
      this.http.get<any>('http://localhost:3000/academic/getAYear/'+this.yearId).subscribe(data => {
       
       if(data.status==200){
        
         this.yearNameVal=data.data.yearName;
         
       }
      })
    } 
  }

  submit(value: any) {
    if(this.yearId){
      this.http.post<any>('http://localhost:3000/academic/updateYear/'+this.yearId, value).subscribe(data => {
      if(data.status==200){
         
        this.alertsDismiss.push({
          type: 'success',
          msg: `Class updated successfully`,
          timeout: 3000
        });
        
        this.router.navigate( [ '/academics/yearlisting' ] );  
          
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
      this.http.post<any>('http://localhost:3000/academic/addyear', {'schooluserId':user._id,'formvalue':value}).subscribe(data => {
		    if(data.status==200){
           
          this.alertsDismiss.push({
            type: 'success',
            msg: `year created successfully`,
            timeout: 3000
          });
          
          this.router.navigate( [ '/academics/yearlisting' ] );   
            
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
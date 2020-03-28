import {Component,ViewChild,ChangeDetectorRef, OnInit} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  templateUrl: 'studentadd.component.html'
})
export class StudentaddComponent  implements OnInit {
  alertsDismiss: any = [];
  classnameVal:any;
  streamId:any;
  constructor(private http: HttpClient,private router:Router,private activatedRoute:ActivatedRoute) {}
  ngOnInit() { 
    this.streamId=this.activatedRoute.snapshot.paramMap.get("streamId");
    /*if(this.classId){
      
      this.http.get<any>('http://localhost:3000/academic/getAClass/'+this.classId).subscribe(data => {
       
       if(data.status==200){
        
         this.classnameVal=data.data.className;
         
       }
      })
    } */
  }

  submit(value: any) {
      console.log(value);
   /* if(this.classId){
      this.http.post<any>('http://localhost:3000/academic/updateClass/'+this.classId, value).subscribe(data => {
      if(data.status==200){
         
        this.alertsDismiss.push({
          type: 'success',
          msg: `Class updated successfully`,
          timeout: 3000
        });
        
        this.router.navigate( [ '/academics/classlisting' ] );  
          
      }
      },error=>{
    console.log("Error", error); 
    this.alertsDismiss.push({
      type: 'danger',
      msg: error,
      timeout: 5000
    });
  })
    }else{*/
      
    var retrievedObject = localStorage.getItem('userInfo');
      var user=JSON.parse(retrievedObject);
      this.http.post<any>('http://localhost:3000/academic/addstudent/'+this.streamId, {'schooluserId':user._id,'formvalue':value}).subscribe(data => {
		    if(data.status==200){
           
          this.alertsDismiss.push({
            type: 'success',
            msg: `student created successfully`,
            timeout: 3000
          });
          
          this.router.navigate( [ '/academics/student',this.streamId ] );   
            
        }
        },error=>{
      console.log("Error", error); 
      this.alertsDismiss.push({
        type: 'danger',
        msg: error,
        timeout: 5000
      });
    })
 // }
  }
}
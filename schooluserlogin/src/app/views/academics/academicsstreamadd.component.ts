import {Component,ViewChild,ChangeDetectorRef, OnInit} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  templateUrl: 'academicsstreamadd.component.html'
})
export class AcademicsStreamAddComponent  implements OnInit {
  alertsDismiss: any = [];
  classnameVal:any;
  classId:any;
  levels:any;
  constructor(private http: HttpClient,private router:Router,private activatedRoute:ActivatedRoute) {}
  ngOnInit() { 
    this.classId=this.activatedRoute.snapshot.paramMap.get("classId");
    var retrievedObject = localStorage.getItem('userInfo');
      var user=JSON.parse(retrievedObject);
      console.log(user);
    this.http.get<any>('http://localhost:3000/academic/getlevel/'+user._id).subscribe(data => {
      console.log(data);
      if(data.status==200){
        
       this.levels=data.data;
      }
     })
  }

  submit(value: any) {
      
    var retrievedObject = localStorage.getItem('userInfo');
      var user=JSON.parse(retrievedObject);
      this.http.post<any>('http://localhost:3000/academic/addstream/'+this.classId,value).subscribe(data => {
		    if(data.status==200){
           
          this.alertsDismiss.push({
            type: 'success',
            msg: `class created successfully`,
            timeout: 3000
          });
          
          this.router.navigate( [ '/academics/stream/',this.classId ] );   
            
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
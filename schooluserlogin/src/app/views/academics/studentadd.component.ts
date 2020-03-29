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
  studentId:any;
  studentdetail:any;
  stdtId:any;
  fatherfirstNameVal:any;firstNameVal:any;lastNameVal:any;fatherlastNameVal:any;
  motherfirstNameVal:any;motherlastNameVal:any;emailaddressVal:any;passwordVal:any;
  statusVal:boolean=true;
  createdAt:any;
  constructor(private http: HttpClient,private router:Router,private activatedRoute:ActivatedRoute) {}
  ngOnInit() { 
    this.streamId=this.activatedRoute.snapshot.paramMap.get("streamId");
    this.studentId=this.activatedRoute.snapshot.paramMap.get("studentId");
    if(this.studentId){
      
      this.http.get<any>('http://localhost:3000/academic/getStudentClass/'+this.streamId+"/"+this.studentId).subscribe(data => {
       
       if(data.status==200){
        data.data[0].stream[0].students.forEach(student => {
         if(student.id==this.studentId){
          console.log(student);
          this.stdtId=student.id;
          this.createdAt=student.createdAt;
          this.firstNameVal=student.firstName;
          this.lastNameVal=student.lastName;
          this.fatherfirstNameVal=student.fatherfirstName;
          this.fatherlastNameVal=student.fatherlastName;
          this.motherfirstNameVal=student.motherfirstName;
          this.motherlastNameVal=student.motherlastName;
          this.emailaddressVal=student.emailaddress;
          this.passwordVal=student.password;
          this.statusVal=student.isActive;
         }
        });
        
         
       }
      })
     
    } 
  }

  submit(value: any) {
      
    if(this.studentId){
      value.studentId=this.stdtId;
      value.createdAt=this.createdAt;
      this.http.post<any>('http://localhost:3000/academic/updateStudentClass/'+this.streamId+"/"+this.studentId, {'formvalue':value}).subscribe(data => {
      if(data.status==200){
         
        this.alertsDismiss.push({
          type: 'success',
          msg: `Student updated successfully`,
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
    }else{
      
    var retrievedObject = localStorage.getItem('userInfo');
      var user=JSON.parse(retrievedObject);
      this.http.post<any>('http://localhost:3000/academic/addstudent/'+this.streamId, {'schooluserId':user._id,'formvalue':value}).subscribe(data => {
		    if(data.status==200){
           
          this.alertsDismiss.push({
            type: 'success',
            msg: `Student created successfully`,
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
  }
  }
}
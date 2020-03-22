import { Component,OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  templateUrl: 'academicstermsadd.component.html'
})
export class AcademicsTermsAddComponent  implements OnInit {
  alertsDismiss: any = [];
  termId:any;
  LevelVal:any;
 /* frommonthVal:any;
  tomonthVal:any;*/
  constructor(private http: HttpClient,private router:Router,private activatedRoute:ActivatedRoute) {}
  ngOnInit() { 
    var retrievedObject = localStorage.getItem('userInfo');
      var user=JSON.parse(retrievedObject);
      this.termId=this.activatedRoute.snapshot.paramMap.get("id");
    if(this.termId){
      
      this.http.get<any>('http://localhost:3000/academic/getALevel/'+this.termId).subscribe(data => {
       
       if(data.status==200){
        console.log(data.data);
         this.LevelVal=data.data.LevelName;
       }
      })
    } 
   }
   submit(value: any) {
    if(this.termId){
      this.http.post<any>('http://localhost:3000/academic/updateLevel/'+this.termId, value).subscribe(data => {
      if(data.status==200){
         
        this.alertsDismiss.push({
          type: 'success',
          msg: `Term updated successfully`,
          timeout: 3000
        });
        
        this.router.navigate( [ '/academics/levellisting' ] );  
          
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
    this.http.post<any>('http://localhost:3000/academic/addlevel', {'schooluserId':user._id,'formvalue':value}).subscribe(data => {
      if(data.status==200){
         
        this.alertsDismiss.push({
          type: 'success',
          msg: `level created successfully`,
          timeout: 3000
        });
        
        this.router.navigate( [ '/academics/levellisting' ] );   
          
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

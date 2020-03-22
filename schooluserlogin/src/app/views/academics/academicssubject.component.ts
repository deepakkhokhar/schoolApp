import { Component,OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  templateUrl: 'academicssubject.component.html'
})
export class AcademicsSubjectComponent  implements OnInit {
  
    public subjectlistingData;
    alertsDismiss: any = [];
    public levelId;
    public arrayObj:any;
    constructor(private http: HttpClient,private router:Router,private activatedRoute:ActivatedRoute) {}
    ngOnInit() { 
      var retrievedObject = localStorage.getItem('userInfo');
        var user=JSON.parse(retrievedObject);
        
        this.levelId=this.activatedRoute.snapshot.paramMap.get("levelId");
        this.http.get<any>('http://localhost:3000/academic/getsubject/'+this.levelId).subscribe(data => {
       console.log(data.data);
       if(data.status==200){ 
        this.subjectlistingData=data.data.subjects;
       /* for(let index=0;index<data.data.stream.length;index++){
            this.arrayObj = data.data.stream[index];
            if(this.arrayObj._id==this.levelId){
               this.subjectlistingData=this.arrayObj.subjects;
            }
            
        }*/
       }
      })
     }
  
}

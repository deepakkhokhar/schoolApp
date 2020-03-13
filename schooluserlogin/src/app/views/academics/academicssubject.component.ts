import { Component,OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  templateUrl: 'academicssubject.component.html'
})
export class AcademicsSubjectComponent  implements OnInit {
  
    public subjectlistingData;
    alertsDismiss: any = [];
    public streamId;
    public arrayObj:any;
    constructor(private http: HttpClient,private router:Router,private activatedRoute:ActivatedRoute) {}
    ngOnInit() { 
      var retrievedObject = localStorage.getItem('userInfo');
        var user=JSON.parse(retrievedObject);
        
        this.streamId=this.activatedRoute.snapshot.paramMap.get("streamId");
        this.http.get<any>('http://localhost:3000/academic/getsubject/'+this.streamId).subscribe(data => {
       console.log(data.data.stream);
       if(data.status==200){ 
        for(let index=0;index<data.data.stream.length;index++){
            this.arrayObj = data.data.stream[index];
            if(this.arrayObj._id==this.streamId){
               this.subjectlistingData=this.arrayObj.subjects;
            }
            
        }
       }
      })
     }
  
}

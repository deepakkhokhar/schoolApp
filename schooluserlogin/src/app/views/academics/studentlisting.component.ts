import { Component,OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  templateUrl: 'studentlisting.component.html'
})
export class StudentlistingComponent  implements OnInit {
  
  public studentlistingData;
  alertsDismiss: any = [];
  streamId:any;
  constructor(private http: HttpClient,private router:Router,private activatedRoute:ActivatedRoute) {}
  ngOnInit() { 
    var retrievedObject = localStorage.getItem('userInfo');
      var user=JSON.parse(retrievedObject);
      this.streamId=this.activatedRoute.snapshot.paramMap.get("streamId");
      this.http.get<any>('http://localhost:3000/academic/getstudent/'+this.streamId).subscribe(data => {
        
       if(data.status==200){ 
         this.studentlistingData=data.data[0].stream[0].students;
         
       }
      });
   }

  
}

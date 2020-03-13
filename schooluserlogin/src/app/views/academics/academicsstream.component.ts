import { Component,OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  templateUrl: 'academicstream.component.html'
})
export class AcademicsStreamComponent  implements OnInit {
  
  public streamlistingData;
  alertsDismiss: any = [];
  public classId;
  constructor(private http: HttpClient,private router:Router,private activatedRoute:ActivatedRoute) {}
  ngOnInit() { 
    var retrievedObject = localStorage.getItem('userInfo');
      var user=JSON.parse(retrievedObject);
      this.classId=this.activatedRoute.snapshot.paramMap.get("classId");
      this.http.get<any>('http://localhost:3000/academic/getstream/'+this.classId).subscribe(data => {
     console.log(data);
     if(data.status==200){
       this.streamlistingData=data.data[0].stream;
     }
    })
   }

  
}

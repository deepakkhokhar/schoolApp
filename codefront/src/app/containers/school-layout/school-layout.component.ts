import {Component } from '@angular/core';
import { navItems } from '../../_schoolNav';
import {Router} from '@angular/router';
import * as jwt_decoder from "jwt-decode";
import { SchoolUserService } from '../../views/school-user/school-user.service';
@Component({
  selector: 'app-school-layout',
  templateUrl: './school-layout.component.html',
  styleUrls: ['./school-layout.component.css']
})
 
export class SchoolLayoutComponent {
isSchoolLoggedIn:boolean
userNames:string
  constructor(private router:Router,private schoolUserService:SchoolUserService) {
   this.isSchoolLoggedIn=this.schoolUserService.isSchoolLoggedIn;
   this.userNames=this.schoolUserService.schoolUserName;
  }
  public sidebarMinimized = false;
  public navItems = navItems;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  logout(){
if(this.isSchoolLoggedIn){
  localStorage.clear();
this.router.navigate(['schools/login']);
 
} 
  }

}

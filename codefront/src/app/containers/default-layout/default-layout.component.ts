import {Component } from '@angular/core';
import { navItems } from '../../_nav';
import {Router} from '@angular/router';
import { AdminUserService } from '../../views/services/admin-user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  userNames:string;
  getAppYear:any
  constructor(private router:Router, private userService:AdminUserService,) {

    this.userNames=this.userService.userNames;
    this.appYear()
  }
  public sidebarMinimized = false;
  public navItems = navItems;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

appYear(){
var today = new Date();
var date = today.getFullYear();
this.getAppYear=date;
  }

  logout(){
    console.log("function called");
	localStorage.clear();
	this.router.navigate(['login']);
  }
}

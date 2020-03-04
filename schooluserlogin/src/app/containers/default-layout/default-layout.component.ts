import {Component } from '@angular/core';
import { navItems } from '../../_nav';
import {Router} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  constructor(private router:Router) {}
  public sidebarMinimized = false;
  public navItems = navItems;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  logout(){
    console.log("function called");
	localStorage.clear();
	this.router.navigate(['login']);
  }
}

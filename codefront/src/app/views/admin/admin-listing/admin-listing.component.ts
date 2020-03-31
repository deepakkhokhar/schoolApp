import { Component, OnInit } from '@angular/core';
import { AdminUserService } from '../../services/admin-user.service';

@Component({
  selector: 'app-admin-listing',
  templateUrl: './admin-listing.component.html',
  styleUrls: ['./admin-listing.component.css']
})
export class AdminListingComponent implements OnInit {
  public items: any[];
  constructor( private adminService:AdminUserService) { }

  ngOnInit(): void {
    this. getUsers();
  }

  getUsers() {
  this.adminService.getUsers().subscribe(data => {
       if(data.status==200){
         this.items = data.users; 
       }
      })
  }

}

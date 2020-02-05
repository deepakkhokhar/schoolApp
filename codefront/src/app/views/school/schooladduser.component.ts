import {Component,ChangeDetectorRef} from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: 'schooladduser.component.html'
})
export class AddSchoolUserComponent {
    constructor(private http: HttpClient,private router:Router,private cd: ChangeDetectorRef) {}
}
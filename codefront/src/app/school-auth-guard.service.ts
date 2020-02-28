import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { SchoolUserService } from './views/school-user/school-user.service';
@Injectable({
  providedIn: 'root'
})
export class SchoolAuthGuardService implements CanActivate {


  constructor(private _router: Router, private schoolUserService:SchoolUserService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.schoolUserService.isSchoolLoggedIn){
		return true;
	}
    // navigate to login page
    this._router.navigate(['schools/login']);
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }

}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decoder from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class SchoolUserService {

  private _userUrl="http://localhost:3000/api/schooluser";
  constructor(
    private http: HttpClient
  ) {}

  //******* Implement user APIs ********
 
  getUsers(){
    return this.http.get<any>(this._userUrl)
  }

  addUser(user:any){
  return this.http.post<any>(`${this._userUrl}/register`,user);
  }

  loginUser(user:any){
    return this.http.post<any>(`${this._userUrl}/login`,user);
    }
  
    updateUser(id:string,user:any) {
      return this.http.put<any>(`${this._userUrl}/update/${id}`,user);
   }
  
  deleteUser(id: number) {
    return this.http.delete<any>(`${this._userUrl}/delete/${id}`);
}


get schoolInfoDecodedToken(){
  var schoolUserInfo = JSON.parse(localStorage.getItem('schoolUserInfo'));
  if(schoolUserInfo){
  var schoolUser =  jwt_decoder(schoolUserInfo);
  if(schoolUser){
    return schoolUser
  }
  }
}

get isSchoolLoggedIn():boolean{
 var dashboard=this.schoolInfoDecodedToken.dashboard;
 if(dashboard && dashboard=="schoolDash"){
 return true
} 
return false
}

get schoolUserName(){
  var user=this.schoolInfoDecodedToken.fullName;
  if(user){
    return user.fullName; 
  }
}

get schoolUserRole(){
   var role=this.schoolInfoDecodedToken.role;
  if(role) return role ;
}



 

}

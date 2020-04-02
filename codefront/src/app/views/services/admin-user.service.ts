 

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decoder from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AdminUserService {
  userInfo:any
  private _userUrl="http://localhost:3000/admin";
  constructor(
    private http: HttpClient
  ) {
    this.isAdminLoggedIn
  }

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

   viewUser(id: number) {
    return this.http.get<any>(`${this._userUrl}/view/${id}`);
}
  
  deleteUser(id: number) {
    return this.http.delete<any>(`${this._userUrl}/delete/${id}`);
}

get isAdminLoggedIn():boolean{
  var adminToken = JSON.parse(localStorage.getItem('userToken'));
  if(adminToken){
  this.userInfo=JSON.parse(localStorage.getItem('userInfo'));
  return true
 } 
 return false
 }

get userNames(){
 if(this.isAdminLoggedIn){
  var user= this.userInfo;
  if(user){
    return user.fullName; 
  }
 }
  
}
get adminUserRole(){
  if(this.isAdminLoggedIn){
    var user=this.userInfo;
    if(user){
      return user.role; 
    }
   }
}

}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() {

    
   }

   alert(type:string,message:string,time:number){
    return [{
        type: type,
        msg: message,
        timeout: time
        }];	
    }
}

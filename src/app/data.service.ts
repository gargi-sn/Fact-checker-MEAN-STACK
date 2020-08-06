import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpc: HttpClient) { }

  sign_up_request(data:any){
    return this.httpc.post("localhost:4200/sign-up",data);
  }

  login_request(data:any){
    return this.httpc.post("localhost:4200/login", data); 
  }

  profile_update(data:any){
    return this.httpc.post("localhost:4200/profile-update", data);
  }
}

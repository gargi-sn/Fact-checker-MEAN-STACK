import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

interface topnav{
  hide:Boolean;
  bgColor?:string;
}

interface userData{
  firstname:string;
  lastname:string;
  email:string;
  profile_pic:string;
}

@Injectable({
  providedIn: 'root'
})
export class StateServiceService {

/* start: topnav component interaction */
  topnavObserver = new Subject<topnav>();
  topnavObservable(){
    return this.topnavObserver.asObservable();
  }
  topnav_hide(){
    this.topnavObserver.next({hide:true});
  }
  topnav_show(){
    this.topnavObserver.next({hide:false});
  }
  topnav_color(){
    this.topnavObserver.next({hide:false, bgColor:"topBg"});
  }
  
/* end: topnav component interaction */

/* start: login */
  logged_observer = new BehaviorSubject({logged:false});
  logged_observable(){
    return this.logged_observer.asObservable;
  }
  login(){
    this.logged_observer.next({logged:true});
  }
  logout(){
    this.logged_observer.next({logged:false});
  }
/* end: login */
  
/*start: userData */
 userDataObserver$ = new BehaviorSubject<userData>({firstname:"", lastname:"", email:"", profile_pic:""});
 user_data_observable(){
   return this.userDataObserver$.asObservable();
 }
 set_new_user_data(data:userData){
   this.userDataObserver$.next(data);
 }
 /*stop: userData */
 
  constructor() { }
}

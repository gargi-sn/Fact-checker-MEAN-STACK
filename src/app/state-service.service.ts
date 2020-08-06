import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

interface topnav{
  hide:Boolean;
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
  

  constructor() { }
}

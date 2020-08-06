import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { StateServiceService } from '../state-service.service';
import { DataService } from '../data.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit, OnDestroy {
  valueFirstName:string;
  valueLastName:string;
  valueEmail:string;
  valuePassword:string;
  valueConfirmPassword:string;

  constructor(private title: Title,
    private ss:StateServiceService,
    private ds:DataService) { }

  ngOnInit(): void {
    this.title.setTitle('sign-up'); 
    this.ss.logged_observer.subscribe((v)=>{
      console.log(v);
    });
  }

  ngOnDestroy(): void{
    this.ss.topnav_hide;
  }

  sign_up(signUpForm){
    this.ds.sign_up_request(signUpForm).subscribe((x)=>{
      console.log('done');
      
    },(x)=>{
      console.log('error');
      this.ss.login();
    },()=>{
      console.log('complete');
    });
   }
}

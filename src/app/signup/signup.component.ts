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
  }

  ngOnDestroy(): void{
    this.ss.topnav_hide();
  }

  sign_up(signUpForm){
    console.log(signUpForm.form.value);
    this.ds.sign_up_request(signUpForm.form.value).subscribe((result:any)=>{
      if(result.status == 201){
        this.ss.login();
      }
    },(x)=>{
      console.log(x);
    },()=>{
      console.log('complete');
    });
   }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { StateServiceService } from '../state-service.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy{
  valueEmail:string;
  valuePassword:string;
  
  constructor(private title:Title, 
    private ss:StateServiceService, 
    private ds:DataService) { }

  ngOnInit(): void {
    this.title.setTitle('login');
    this.ss.user_data_observable().subscribe((value:any)=>{
      console.log(value);
    })
  }

  ngOnDestroy():void{
    this.ss.topnav_hide();
  }

  login(loginForm){
    this.ds.login_request(loginForm.form.value).subscribe((result:any)=>{
      if(result.status == 202){
        this.ss.set_new_user_data(result.data);
        this.ss.login();
      }
    },(x)=>{
        console.log(x);
    },()=>{
        console.log('complete');
    });
  }

}

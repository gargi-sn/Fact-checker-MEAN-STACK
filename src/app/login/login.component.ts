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
  }

  ngOnDestroy():void{
    this.ss.topnav_hide();
  }

  login(loginForm){
    this.ds.login_request(loginForm).subscribe({
      next(v){
        console.log("done");
      },error(v){
        console.log("error");
      },complete(){
        console.log("complete");
      }
    })
  }

}

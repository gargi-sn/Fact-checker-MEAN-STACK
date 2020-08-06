import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  valueState;
  valueAddress;
  valueFirstName;
  valueLastName;
  valueEmail;
  @ViewChild('profileForm')
  profileForm;  //form_data

  states = ["Rajasthan", "Bihar" , "Delhi"];
  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }
   
  submit_changes(){
    this.ds.profile_update(this.profileForm.data).subscribe((result:any)=>{
      console.log(result);
    },(error)=>{
      console.log(error);
    });
  }
}

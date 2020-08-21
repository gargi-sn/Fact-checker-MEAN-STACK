import { Component, OnInit } from '@angular/core';
import { StateServiceService } from '../state-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  comment;
  constructor(private ss:StateServiceService) { }

  ngOnInit(): void {
    //this.ss.topnav_color();
  }
  go_to_post(){

  }
  comment_submit(){

  }
}

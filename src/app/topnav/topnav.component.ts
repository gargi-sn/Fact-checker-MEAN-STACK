import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  toggle:Boolean = false;
  constructor(private ren: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
   

  }

   menuToggle(nav){
    this.toggle = !this.toggle; 
    if(this.toggle){
      this.ren.addClass(nav, 'show');
    }else{
      this.ren.removeClass(nav, 'show');
    }
  }

}

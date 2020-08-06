import { Component, OnInit, Renderer2, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { StateServiceService } from '../state-service.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
  @ViewChild('nav')
  nav;
  logged:Boolean = false;
  toggle:Boolean = false;
  topnavUnsubscriber;
  loginUnsubscriber;
 
  
  constructor(private ren: Renderer2, private el: ElementRef, private ss: StateServiceService) { }

  ngOnInit(): void {
    
  }
  
  ngAfterViewInit(): void{

    this.topnavUnsubscriber = this.ss.topnavObservable().subscribe((v)=>{
        if(window.innerWidth <= 700){
          if(v.hide == true){
            this.toggle = false;
            this.ren.removeClass(this.nav.nativeElement, 'show');
          }
          else{
            this.toggle=true;
            this.ren.addClass(this.nav.nativeElement,'show');
          }
        }
      });

    this.loginUnsubscriber = this.ss.logged_observer.subscribe((v)=>{
      console.log(v);
      this.logged = v.logged;
    })
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

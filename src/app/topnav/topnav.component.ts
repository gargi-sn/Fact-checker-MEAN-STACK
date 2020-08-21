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
  changedColor;
  
  constructor(private ren: Renderer2, private el: ElementRef, private ss: StateServiceService) { }

  ngOnInit(): void {
    
  }
  
  ngAfterViewInit(): void{

    this.topnavUnsubscriber = this.ss.topnavObservable().subscribe((v)=>{
        if(window.innerWidth <= 700){ //checks window size as topnav hidin during page change is only available when the screen size is less than 700px;
          if(v.hide == true){ 
            this.toggle = false;
            this.ren.removeClass(this.nav.nativeElement, 'show');
          }
          else{
            this.toggle=true;
            this.ren.addClass(this.nav.nativeElement,'show');
          }
        }
        if(v.hasOwnProperty('bgColor')){
          //checks if the color change is called that will change the color of the top nav by validating it to the this.changedColor value.
          this.changedColor = true;
        }else{
          this.changedColor = false
        }
      });

    this.loginUnsubscriber = this.ss.logged_observer.subscribe((v)=>{
      //checks for login to provide customized ui in top nav;
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

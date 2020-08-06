import { Directive, HostListener, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { StateServiceService } from './state-service.service';

@Directive({
  selector: '[appTopnav]'
})
export class TopnavDirective implements AfterViewInit{
  topnavUnsubscriber;
  constructor(private _el : ElementRef, private renderer: Renderer2, private ss:StateServiceService) { }

  @HostListener('window:scroll') 
  whenScrolled(e){
    if(window.pageYOffset > 0){
      this.renderer.addClass(this._el.nativeElement, 'topnav-onscroll');
    }else{
      this.renderer.removeClass(this._el.nativeElement, 'topnav-onscroll');
    }
  }

  @HostListener('window:resize')
  window_resize(e){
    if(window.innerWidth > 700){
      this.renderer.removeClass(this._el.nativeElement, 'show');
    }
  }
  ngAfterViewInit():void{
    this.topnavUnsubscriber = this.ss.topnavObservable().subscribe((v)=>{
      if(window.innerWidth <= 700){
        if(v.hide == true){
          this.renderer.removeClass(this._el.nativeElement, 'show');
        }
        else{
          this.renderer.addClass(this._el.nativeElement,'show');
        }
      }
    });
  }
}

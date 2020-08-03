import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTopnav]'
})
export class TopnavDirective {

  constructor(private _el : ElementRef, private renderer: Renderer2) { }

  @HostListener('window:scroll') 
  whenScrolled(e){
    if(window.pageYOffset > 0){
      this.renderer.addClass(this._el.nativeElement, 'topnav-onscroll');
    }else{
      this.renderer.removeClass(this._el.nativeElement, 'topnav-onscroll');
    }
    
  }
}

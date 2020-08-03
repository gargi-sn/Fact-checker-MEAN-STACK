import { Component, OnInit, Renderer2, ElementRef, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  svgSrc = "";
  left = 0;
  
  constructor(private ren: Renderer2, private el: ElementRef, private cdr:ChangeDetectorRef) { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit():void{
  
    this.svgSrc = '../../assets/ui/mobile-marketing-animate.svg';
    this.cdr.detectChanges();
   
  }


  slidePrev(inner){
    this.left = this.left==0?this.left - 300 : this.left + 100;
    this.ren.setStyle(inner, 'left', this.left+"%");

  }

  slideNext(inner){
    this.left = this.left!=-300?this.left - 100: 0;
    this.ren.setStyle(inner, 'left', this.left+"%");
  }

  
 
}

import { Component, OnInit, Renderer2, ElementRef, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { StateServiceService } from '../state-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy {
  svgSrc = "";
  left = 0;
  logged:Boolean = false;
  
  constructor(private title:Title,
     private ren: Renderer2,
     private el: ElementRef,
     private cdr:ChangeDetectorRef,
     private ss:StateServiceService
     ) { }

  ngOnInit(): void {
    this.title.setTitle('Home');
    this.ss.logged_observer.subscribe((x)=>{
      this.logged = x.logged;
    },(x)=>{
      console.log('error');
    });
  }
  ngAfterViewInit():void{
    this.svgSrc = '../../assets/ui/mobile-marketing-animate.svg';
    this.cdr.detectChanges();
   
  }
  ngOnDestroy():void{
    this.ss.topnav_hide();
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

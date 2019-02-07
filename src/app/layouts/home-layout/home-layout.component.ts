import { Component, OnInit, Renderer2, ElementRef, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from '../../services/window-service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
})
export class HomeLayoutComponent implements OnInit {
  
  constructor(public render: Renderer2, 
    private element: ElementRef,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) {
    
  }
  
  
   ngOnInit(){
  
   }

@HostListener('window:scroll', ['$event'])
scroll(event ) {
  let $header = this.document.getElementsByClassName('header')[0];
  let number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
  if (number > 150) {
    this.render.addClass($header,'sticky')
  } else  {
    $header.classList.remove('sticky')
    this.render.removeClass($header,'sticky');
  }
}

}

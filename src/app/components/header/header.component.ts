import { Component, OnInit, Renderer2, ElementRef, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from '../../services/window-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public render: Renderer2, 
    private element: ElementRef,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) {

  }
  ngOnInit() {
    
  }

}

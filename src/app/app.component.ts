import { Component, OnInit, Renderer2, HostListener, EventEmitter, ElementRef, Inject, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';
import { DOCUMENT } from "@angular/platform-browser";
import { WINDOW } from './services/window-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class AppComponent {
  title = 'school';
  
  constructor(public render: Renderer2, 
    private element: ElementRef,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) {
  }
}

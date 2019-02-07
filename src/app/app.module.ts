import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { WINDOW_PROVIDERS } from './services/window-service';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ComponentsModule,
    MatIconModule,
    RouterModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ComComponent } from './com/com.component';
import { SidNavComponent } from './sid-nav/sid-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ComComponent,
    SidNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

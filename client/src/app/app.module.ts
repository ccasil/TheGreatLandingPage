import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

import { RobinhoodModule } from './robinhood/robinhood.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RobinhoodModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

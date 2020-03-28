import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RobinhoodRoutingModule } from './robinhood-routing.module'
import { RobinhoodlandingComponent } from './robinhoodlanding/robinhoodlanding.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [RobinhoodlandingComponent, HeaderComponent],
  imports: [
    CommonModule,
    RobinhoodRoutingModule
  ],
  exports: [RobinhoodlandingComponent]
})
export class RobinhoodModule { }

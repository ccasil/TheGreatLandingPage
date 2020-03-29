import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RobinhoodRoutingModule } from './robinhood-routing.module'
import { RobinhoodlandingComponent } from './robinhoodlanding/robinhoodlanding.component';
import { RobinhoodheaderComponent } from './robinhoodheader/robinhoodheader.component';

@NgModule({
  declarations: [RobinhoodlandingComponent, RobinhoodheaderComponent],
  imports: [
    CommonModule,
    RobinhoodRoutingModule
  ],
  exports: [RobinhoodlandingComponent]
})
export class RobinhoodModule { }

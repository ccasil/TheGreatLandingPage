import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirefoxRoutingModule } from './firefox-routing.module';
import { FirefoxlandingComponent } from './firefoxlanding/firefoxlanding.component';
import { FirefoxheaderComponent } from './firefoxheader/firefoxheader.component';


@NgModule({
  declarations: [FirefoxlandingComponent, FirefoxheaderComponent],
  imports: [
    CommonModule,
    FirefoxRoutingModule
  ]
})
export class FirefoxModule { }

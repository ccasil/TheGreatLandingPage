import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirefoxlandingComponent } from './firefoxlanding/firefoxlanding.component';

const routes: Routes = [
  { path: '', component: FirefoxlandingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirefoxRoutingModule { }

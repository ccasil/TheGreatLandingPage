import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RobinhoodlandingComponent } from './robinhoodlanding/robinhoodlanding.component';

const routes: Routes = [
    { path: '', component: RobinhoodlandingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RobinhoodRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'robinhood', loadChildren: () => import('./robinhood/robinhood.module').then(m => m.RobinhoodModule) },
  { path: 'firefox', loadChildren: () => import('./firefox/firefox.module').then(m => m.FirefoxModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

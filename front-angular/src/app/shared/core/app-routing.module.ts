import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomePageComponent } from '../../feat/home-page/home-page.component';

export const appRoutes: Routes = [
  {
    path: 'app',
    canActivate: [],
    children: [
      {
        path: 'home',
        component: HomePageComponent,
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/app/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

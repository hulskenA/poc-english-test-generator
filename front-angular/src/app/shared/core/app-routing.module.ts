import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateItemComponent } from '../../feat/create-item/create-item.component';
import { AccountComponent } from "../../feat/account/account.component";

export const appRoutes: Routes = [
  {
    path: 'app',
    canActivate: [],
    children: [
      {
        path: 'create-item',
        component: CreateItemComponent,
      },
      {
        path: 'account',
        component: AccountComponent,
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/app/create-item',
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

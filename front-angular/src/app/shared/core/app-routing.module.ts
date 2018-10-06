import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomePageComponent } from '../../feat/home-page/home-page.component';
import {TestsListComponent} from "../../feat/tests-list/tests-list.component";
import {AllTestLevelResolver} from "../resolver/all-test-level.resolver";
import {CreateItemComponent} from "../../feat/create-item/create-item.component";

export const appRoutes: Routes = [
  {
    path: 'app',
    canActivate: [],
    children: [
      {
        path: 'home',
        component: HomePageComponent,
      },
      {
        path: 'create-item',
        component: CreateItemComponent,
      },
      {
        path: 'tests',
        component: TestsListComponent,
        resolve: {
          levelList: AllTestLevelResolver
        }
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

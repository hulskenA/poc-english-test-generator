import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateItemComponent } from '../../feat/create-item/create-item.component';
import { AccountComponent } from "../../feat/account/account.component";
import { TestComponent } from "../../feat/test/test.component";
import { TestByLevelResolver } from "../resolver/test-by-level.resolver";
import { AnalyzeComponent } from "../../feat/analyze/analyze.component";
import { ListingComponent } from '../../feat/listing/listing.component';

import { ItemsResolver } from "../resolver/items.resolver"

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
      },
      {
        path: 'results',
        component: AnalyzeComponent
      },
      {
        path: 'listing',
        component: ListingComponent,
        resolve: {
          items: ItemsResolver
        }
      },
      {
        path: 'test',
        children: [
          {
            path: '',
            component: TestsListComponent,
            resolve: {
              levelList: AllTestLevelResolver
            }
          },
          {
            path: ':level',
            component: TestComponent,
            resolve: {
              itemList: TestByLevelResolver
            }
          }
        ]
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
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

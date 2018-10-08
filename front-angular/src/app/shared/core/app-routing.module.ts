import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestsListComponent } from '../../feat/tests-list/tests-list.component';
import { AllTestLevelResolver } from '../resolver/all-test-level.resolver';
import { CreateItemComponent } from '../../feat/create-item/create-item.component';
import { AccountComponent } from "../../feat/account/account.component";
import { TestComponent } from "../../feat/test/test.component";
import { TestByLevelResolver } from "../resolver/test-by-level.resolver";
import { AnalyzeComponent } from "../../feat/analyze/analyze.component";

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
    redirectTo: '/app/test',
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

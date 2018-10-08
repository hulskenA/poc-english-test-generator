import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


import { CustomMaterialModule } from "./shared/core/material.module";
import { AppRoutingModule } from "./shared/core/app-routing.module";
import { AppComponent } from './app.component';

import { NavBarComponent } from './feat/nav-bar/nav-bar.component';
import { TestsListComponent } from './feat/tests-list/tests-list.component';
import { CreateItemComponent } from './feat/create-item/create-item.component';
import { AccountComponent } from './feat/account/account.component';
import { TestsListItemComponent } from './feat/tests-list/tests-list-item/tests-list-item.component';
import { TestComponent } from './feat/test/test.component';

import { TestLevelService } from "./shared/service/test-level.service";

import { TestByLevelResolver } from "./shared/resolver/test-by-level.resolver";
import { AllTestLevelResolver } from "./shared/resolver/all-test-level.resolver";


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TestsListComponent,
    CreateItemComponent,
    AccountComponent,
    TestsListItemComponent,
    TestComponent
  ],
  imports: [
    CustomMaterialModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TestLevelService,
    AllTestLevelResolver,
    TestByLevelResolver
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HomePageComponent } from './feat/home-page/home-page.component';
import { AppRoutingModule } from "./shared/core/app-routing.module";
import { NavBarComponent } from './feat/nav-bar/nav-bar.component';
import { CustomMaterialModule } from "./shared/core/material.module";
import { TestsListComponent } from './feat/tests-list/tests-list.component';
import {HttpClientModule} from "@angular/common/http";
import {TestLevelService} from "./shared/service/test-level.service";
import {AllTestLevelResolver} from "./shared/resolver/all-test-level.resolver";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    TestsListComponent
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
    AllTestLevelResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

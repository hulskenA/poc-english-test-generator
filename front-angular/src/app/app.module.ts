import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HomePageComponent } from './feat/home-page/home-page.component';
import { AppRoutingModule } from "./shared/core/app-routing.module";
import { NavBarComponent } from './feat/nav-bar/nav-bar.component';
import { CustomMaterialModule } from "./shared/core/material.module";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent
  ],
  imports: [
    CustomMaterialModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

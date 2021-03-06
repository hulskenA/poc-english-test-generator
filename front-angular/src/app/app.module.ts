import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  FormsModule,
  ReactiveFormsModule
} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';


import { CustomMaterialModule } from "./shared/core/material.module";
import { AppRoutingModule } from "./shared/core/app-routing.module";
import { AppComponent } from './app.component';

import { NavBarComponent } from './feat/nav-bar/nav-bar.component';
import { CreateItemComponent } from './feat/create-item/create-item.component';
import { AccountComponent } from './feat/account/account.component';

import { TestLevelService } from "./shared/service/test-level.service";
import { ElasticRequestorService } from "./shared/service/elastic-requestor.service";

import { TestByLevelResolver } from "./shared/resolver/test-by-level.resolver";
import { AllTestLevelResolver } from "./shared/resolver/all-test-level.resolver";
import { ItemsResolver } from "./shared/resolver/items.resolver"

import { LoadingComponent } from './shared/component/loading/loading.component';
import { ImportFileItemComponent } from './feat/create-item/import-file-item/import-file-item.component';
import { CreateItemGroupComponent } from './feat/create-item/create-item-group/create-item-group.component';
import { MultipleChoiceItemFormComponent } from './shared/component/multiple-choice-item-form/multiple-choice-item-form.component';
import { OpenItemFormComponent } from './shared/component/open-item-form/open-item-form.component';
import { ReadingItemFormComponent } from './shared/component/reading-item-form/reading-item-form.component';
import { ReadingItemSubQuestionFormModalComponent } from './shared/component/reading-item-form/reading-item-sub-question-form-modal/reading-item-sub-question-form-modal.component';
import { ListingComponent } from './feat/listing/listing.component';
import { FilterFormComponent } from './feat/listing/filter-form/filter-form.component';
import { NotificationDirective } from './shared/directive/notification.directive';
import { NotificationComponent } from './shared/component/notification/notification.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CreateItemComponent,
    AccountComponent,
    CreateItemGroupComponent,
    ReadingItemSubQuestionFormModalComponent,
    LoadingComponent,
    ImportFileItemComponent,
    MultipleChoiceItemFormComponent,
    OpenItemFormComponent,
    ReadingItemFormComponent,
    ListingComponent,
    FilterFormComponent,
    NotificationDirective,
    NotificationComponent
  ],
  imports: [
    CustomMaterialModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    TestLevelService,
    AllTestLevelResolver,
    TestByLevelResolver,
    ItemsResolver,
    ElasticRequestorService,
    NotificationDirective
  ],
  entryComponents: [
    ReadingItemSubQuestionFormModalComponent,
    NotificationComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

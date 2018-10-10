import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatBadgeModule,
  MatListModule,
  MatTabsModule,
  MatSelectModule,
  MatInputModule,
  MatExpansionModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CdkTreeModule,
    CdkTableModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    CommonModule,
    MatBadgeModule,
    MatListModule,
    MatTabsModule,
    MatSelectModule,
    MatInputModule,
    MatExpansionModule
  ],
  exports: [
    BrowserAnimationsModule,
    CdkTreeModule,
    CdkTableModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    CommonModule,
    MatBadgeModule,
    MatListModule,
    MatTabsModule,
    MatSelectModule,
    MatInputModule,
    MatExpansionModule
  ]
})
export class CustomMaterialModule { }

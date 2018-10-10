import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatBadgeModule,
  MatListModule,
  MatTabsModule,
  MatSelectModule,
  MatInputModule
  MatTabsModule,
  MatSelectModule,
  MatInputModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDialogModule
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
    MatBadgeModule,
    MatListModule,
    MatTabsModule,
    MatSelectModule,
    MatInputModule
    MatTabsModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDialogModule
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
    MatBadgeModule,
    MatListModule,
    MatTabsModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDialogModule
    MatTabsModule,
    MatSelectModule,
    MatInputModule,
    MatExpansionModule
  ]
})
export class CustomMaterialModule { }

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
  MatInputModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDialogModule
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
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDialogModule
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
  ]
})
export class CustomMaterialModule { }

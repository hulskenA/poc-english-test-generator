import { Directive } from '@angular/core';
import { MatSnackBar } from "@angular/material";
import { NotificationComponent } from "../component/notification/notification.component";

@Directive({
  selector: '[appNotification]'
})
export class NotificationDirective {

  constructor(public snackBar: MatSnackBar) {}

  public showNotif(message: string, classes: string) {
    this.snackBar.openFromComponent(NotificationComponent, {
      duration: 2500,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: classes,
      data: message
    });
  }

}

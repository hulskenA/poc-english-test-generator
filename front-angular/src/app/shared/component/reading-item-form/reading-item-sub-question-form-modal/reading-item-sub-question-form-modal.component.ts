import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { SimpleItem } from "../../../model/items/simple-item";
import { OpenItemFormComponent } from "../../open-item-form/open-item-form.component";
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from "@angular/material";
import { MultipleChoiceItemFormComponent } from "../../multiple-choice-item-form/multiple-choice-item-form.component";

class DialogData {
}

@Component({
  selector: 'app-reading-item-sub-question-form-modal',
  templateUrl: './reading-item-sub-question-form-modal.component.html',
  styleUrls: ['./reading-item-sub-question-form-modal.component.scss']
})
export class ReadingItemSubQuestionFormModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ReadingItemSubQuestionFormModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {
  }

  public submitItem(itemCreated: SimpleItem): void {
    this.dialogRef.close(itemCreated);
  }

  public close(): void {
    this.dialogRef.close();
  }

}

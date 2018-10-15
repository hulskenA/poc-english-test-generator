import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output
} from '@angular/core';
import { ReadingItem } from "../../model/items/reading-item";
import {
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import {
  buildEmptyOpenItem,
  OpenItem
} from "../../model/items/open-item";
import {
  buildEmptyMultipleChoiceItem,
  MultipleChoiceItem
} from "../../model/items/multiple-choice-item";
import { SimpleItem } from "../../model/items/simple-item";
import { MatDialog } from "@angular/material";
import { ReadingItemSubQuestionFormModalComponent } from "./reading-item-sub-question-form-modal/reading-item-sub-question-form-modal.component";
import { Observable } from "rxjs/index";

@Component({
  selector: 'app-create-reading-item',
  templateUrl: './reading-item-form.component.html',
  styleUrls: ['./reading-item-form.component.scss']
})
export class ReadingItemFormComponent implements OnChanges {

  @Input()
  public readingItemToCreate: ReadingItem;
  @Input()
  public levels: any[];

  @Output()
  public onSubmit: EventEmitter<ReadingItem> = new EventEmitter<ReadingItem>();
  @Output()
  public onCancel: EventEmitter<void> = new EventEmitter<void>();

  public readingItemForm: FormGroup;

  public openItemToCreate: OpenItem = buildEmptyOpenItem();
  public multipleChoiceItemToCreate: MultipleChoiceItem = buildEmptyMultipleChoiceItem();
  public newItem: SimpleItem = this.openItemToCreate;

  constructor(
    private formBuilder: FormBuilder,
    private matDialog: MatDialog
  ) { }

  ngOnChanges() {
    this.readingItemForm = this.formBuilder.group({
      description: [this.readingItemToCreate.description, Validators.required],
      content: [this.readingItemToCreate.content]
    });
  }

  public submit(): void {
    const readingItemCreated: ReadingItem = Object.assign({}, this.readingItemToCreate);
    Object.assign(readingItemCreated, this.readingItemForm.value);

    this.readingItemForm.reset(this.readingItemToCreate, {
      emitEvent: false
    });
    this.onSubmit.emit(readingItemCreated);
  }

  public cancel(): void {
    this.readingItemForm.reset(this.readingItemToCreate);
    this.onCancel.emit();
  }

  public createSubItem() {
    this.openDialog(this.newItem).subscribe((resultItem: SimpleItem) => {
      if (resultItem && !(this.readingItemForm.value.content.includes(resultItem)))
        this.readingItemForm.value.content.push(resultItem);
    });
  }

  public modifySubItem(itemToModify: SimpleItem): void {
    this.openDialog(itemToModify).subscribe((modifiedItem: SimpleItem) => {
      if (modifiedItem) {
        let itemIndex = this.readingItemForm.value.content.indexOf(itemToModify);
        this.readingItemForm.value.content[itemIndex] = modifiedItem;
      }
    });
  }

  public deleteSubItem(itemToDelete: SimpleItem): void {
    this.readingItemForm.value.content = this.readingItemForm.value.content.filter(item => item !== itemToDelete);
  }

  private openDialog(item: SimpleItem): Observable<SimpleItem | undefined> {
    const dialogRef = this.matDialog.open(ReadingItemSubQuestionFormModalComponent, {
      minWidth: '75%',
      maxHeight: '80%',
      data: {
        levels: this.levels,
        subItemToCreate: item
      }
    });

    return dialogRef.afterClosed();
  }

}

import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {buildEmptyReadingItem, ReadingItem} from "../../model/items/reading-item";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {buildEmptyOpenItem, OpenItem} from "../../model/items/open-item";
import {buildEmptyMultipleChoiceItem, MultipleChoiceItem} from "../../model/items/multiple-choice-item";
import {SimpleItem} from "../../model/items/simple-item";
import {MatDialog} from "@angular/material";
import {ReadingItemSubQuestionFormModalComponent} from "./reading-item-sub-question-form-modal/reading-item-sub-question-form-modal.component";

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
  public newChoice: SimpleItem = this.openItemToCreate;
  public subQuestions: SimpleItem[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private matDialog: MatDialog
  ) { }

  ngOnChanges() {
    this.readingItemForm = this.formBuilder.group({
      description: [this.readingItemToCreate.description, Validators.required]
    });
  }

  public submit(): void {
    this.onSubmit.emit(this.readingItemToCreate);
    this.cancel();
  }

  public cancel(): void {
    this.readingItemToCreate = buildEmptyReadingItem();
    this.newChoice = buildEmptyOpenItem();
    this.readingItemForm.reset();

    this.onCancel.emit();
  }

  public modifySubItem(itemToModify: SimpleItem): void {
    this.newChoice = itemToModify;
  }

  public addSubItem(subITemToAdd: SimpleItem): void {
    this.deleteSubItem(subITemToAdd);
    this.readingItemToCreate.content.push(Object.assign({}, subITemToAdd));
  }

  public deleteSubItem(itemToDelete: SimpleItem): void {
    this.readingItemToCreate.content = this.readingItemToCreate.content.filter(item => item !== itemToDelete);
  }

  public openDialog() {
    const dialogRef = this.matDialog.open(ReadingItemSubQuestionFormModalComponent, {
      minWidth: '50%',
      maxHeight: '80%',
      data: {
        levels: this.levels,
        subItemToCreate: this.newChoice
      }
    });

    dialogRef.afterClosed().subscribe(resultItem => {
      if (resultItem)
        this.subQuestions.push(resultItem);

      console.log(this.openItemToCreate);
    });
  }

}

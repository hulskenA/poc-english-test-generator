import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {buildEmptyReadingItem, ReadingItem} from "../../model/items/reading-item";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {buildEmptyOpenItem, OpenItem} from "../../model/items/open-item";
import {buildEmptyMultipleChoiceItem, MultipleChoiceItem} from "../../model/items/multiple-choice-item";
import {SimpleItem} from "../../model/items/simple-item";

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

  constructor(private formBuilder: FormBuilder) { }

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

}

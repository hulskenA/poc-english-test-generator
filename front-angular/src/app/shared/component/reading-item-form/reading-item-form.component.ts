import {Component, Input, OnInit} from '@angular/core';
import {ReadingItem} from "../../model/items/reading-item";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {buildEmptyOpenItem, OpenItem} from "../../model/items/open-item";
import {buildEmptyMultipleChoiceItem, MultipleChoiceItem} from "../../model/items/multiple-choice-item";

@Component({
  selector: 'app-create-reading-item',
  templateUrl: './reading-item-form.component.html',
  styleUrls: ['./reading-item-form.component.scss']
})
export class ReadingItemFormComponent implements OnInit {

  @Input()
  public readingItemToCreate: ReadingItem;
  @Input()
  public levels: any[];

  public readingItemForm: FormGroup;

  public openItemToCreate: OpenItem = buildEmptyOpenItem();
  public multipleItemToCreate: MultipleChoiceItem = buildEmptyMultipleChoiceItem();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.readingItemForm = this.formBuilder.group({
      description: [this.readingItemToCreate.description, Validators.required]
    });
  }

  public onSubmit(): void {

  }

  public addSubItem(): void {

  }

  public deleteSubItem(): void {

  }

  }

import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MultipleChoiceItem} from "../../model/items/multiple-choice-item";
import {log} from "util";


@Component({
  selector: 'app-create-multiple-choice-item',
  templateUrl: './multiple-choice-item-form.component.html',
  styleUrls: ['./multiple-choice-item-form.component.scss']
})
export class MultipleChoiceItemFormComponent implements OnInit {

  @Input()
  public multipleChoiceItemToCreate: MultipleChoiceItem;
  @Input()
  public levels: any[];

  public multipleChoiceItemForm: FormGroup;

  public newChoice: string = '';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.multipleChoiceItemForm = this.formBuilder.group({
      description: [this.multipleChoiceItemToCreate.description, Validators.required],
      level: [this.multipleChoiceItemToCreate.level, Validators.required],
    });
  }

  public onSubmit(): void {
    if (this.multipleChoiceItemForm.valid && this.multipleChoiceItemToCreate.correctAnswer !== null) {
      this.multipleChoiceItemToCreate.description = this.multipleChoiceItemForm.get('description').value;
      this.multipleChoiceItemToCreate.level = this.multipleChoiceItemForm.get('level').value;

      log(this.multipleChoiceItemToCreate);
    }
  }

  public addChoice(): void {
    if (this.newChoice !== "")
      this.multipleChoiceItemToCreate.content.push(this.newChoice);
  }

  public deleteChoice(choiceToDelete: string): void {
    this.multipleChoiceItemToCreate.content = this.multipleChoiceItemToCreate.content.filter(s => s !== choiceToDelete);
    if (this.multipleChoiceItemToCreate.correctAnswer === choiceToDelete)
      this.multipleChoiceItemToCreate.correctAnswer = null;
  }

}

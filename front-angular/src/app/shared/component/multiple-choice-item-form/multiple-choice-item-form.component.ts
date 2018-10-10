import {Component,
  EventEmitter,
  Input,
  OnChanges,
  Output} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import {
  buildEmptyMultipleChoiceItem,
  MultipleChoiceItem
} from "../../model/items/multiple-choice-item";


@Component({
  selector: 'app-create-multiple-choice-item',
  templateUrl: './multiple-choice-item-form.component.html',
  styleUrls: ['./multiple-choice-item-form.component.scss']
})
export class MultipleChoiceItemFormComponent implements OnChanges {

  @Input()
  public multipleChoiceItemToCreate: MultipleChoiceItem;
  @Input()
  public levels: any[];

  @Output()
  public onSubmit: EventEmitter<MultipleChoiceItem> = new EventEmitter<MultipleChoiceItem>();
  @Output()
  public onCancel: EventEmitter<void> = new EventEmitter<void>();

  public multipleChoiceItemForm: FormGroup;

  public newChoice: string = '';

  constructor(private formBuilder: FormBuilder) { }

  ngOnChanges() {
    this.multipleChoiceItemForm = this.formBuilder.group({
      description: [this.multipleChoiceItemToCreate.description, Validators.required],
      level: [this.multipleChoiceItemToCreate.level, Validators.required],
    });
  }

  public submit(): void {
    if (this.multipleChoiceItemForm.valid && this.multipleChoiceItemToCreate.correctAnswer !== null) {
      this.multipleChoiceItemToCreate.description = this.multipleChoiceItemForm.get('description').value;
      this.multipleChoiceItemToCreate.level = this.multipleChoiceItemForm.get('level').value;

      this.onSubmit.emit(this.multipleChoiceItemToCreate);
      this.cancel();
    }
  }

  public cancel(): void {
    this.multipleChoiceItemToCreate = buildEmptyMultipleChoiceItem();
    this.newChoice = '';
    this.multipleChoiceItemForm.reset();

    this.onCancel.emit();
  }

  public addChoice(): void {
    if (this.newChoice !== "") {
      this.multipleChoiceItemToCreate.content.push(this.newChoice);
      this.newChoice = '';
    }
  }

  public deleteChoice(choiceToDelete: string): void {
    this.multipleChoiceItemToCreate.content = this.multipleChoiceItemToCreate.content.filter(s => s !== choiceToDelete);
    if (this.multipleChoiceItemToCreate.correctAnswer === choiceToDelete)
      this.multipleChoiceItemToCreate.correctAnswer = null;
  }

}

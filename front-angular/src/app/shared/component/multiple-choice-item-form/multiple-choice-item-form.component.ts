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

  constructor(private formBuilder: FormBuilder) { }

  ngOnChanges() {
    this.multipleChoiceItemForm = this.formBuilder.group({
      description: [this.multipleChoiceItemToCreate.description, Validators.required],
      level: [this.multipleChoiceItemToCreate.level, Validators.required],
      correctAnswer: [this.multipleChoiceItemToCreate.correctAnswer, Validators.minLength(0)],
      content: [this.multipleChoiceItemToCreate.content, Validators.minLength(0)]
    });
  }

  public submit(): void {
    if (this.multipleChoiceItemForm.valid) {
      const multipleChoiceItemCreated: MultipleChoiceItem = Object.assign(this.multipleChoiceItemToCreate, this.multipleChoiceItemForm.getRawValue());

      this.onSubmit.emit(multipleChoiceItemCreated);
      this.multipleChoiceItemForm.reset(this.multipleChoiceItemToCreate, {
        emitEvent: false
      });
    }
  }

  public cancel(): void {
    this.multipleChoiceItemForm.reset(this.multipleChoiceItemToCreate);

    this.onCancel.emit();
  }

  public addChoice(newChoice: any): void {
    if (newChoice.value !== '') {
      this.multipleChoiceItemForm.value.content.push(newChoice.value);
      newChoice.value = '';
    }
  }

  public deleteChoice(choiceToDelete: string): void {
    this.multipleChoiceItemForm.value.content = this.multipleChoiceItemForm.value.content.filter(s => s !== choiceToDelete);
  }

}

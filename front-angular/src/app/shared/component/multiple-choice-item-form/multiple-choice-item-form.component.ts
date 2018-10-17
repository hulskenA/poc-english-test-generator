import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { MultipleChoiceItem } from "../../model/items/multiple-choice-item";
import { Tools } from "../../core/tools.module";


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
      correctAnswer: [this.multipleChoiceItemToCreate.correctAnswer, Validators.required],
      content: [this.multipleChoiceItemToCreate.content]
    });
  }

  public submit(): void {
    if (this.multipleChoiceItemForm.valid) {
      const multipleChoiceItemCreated: MultipleChoiceItem = Tools.clone(this.multipleChoiceItemToCreate);
      Object.assign(multipleChoiceItemCreated, this.multipleChoiceItemForm.value);

      Tools.resetForm(this.multipleChoiceItemForm, this.multipleChoiceItemToCreate);
      this.onSubmit.emit(multipleChoiceItemCreated);
    } else {
      Tools.markedForm(this.multipleChoiceItemForm);
    }
  }

  public cancel(): void {
    Tools.resetForm(this.multipleChoiceItemForm, this.multipleChoiceItemToCreate);
    this.onCancel.emit();
  }

  public addChoice(newChoice): void {
    if (newChoice.value !== '') {
      this.multipleChoiceItemForm.get('content').value.push(newChoice.value);
      newChoice.value = '';
    }
  }

  public deleteChoice(choiceToDelete: string): void {
    this.multipleChoiceItemForm.value.content = this.multipleChoiceItemForm.value.content.filter(s => s !== choiceToDelete);
  }

}

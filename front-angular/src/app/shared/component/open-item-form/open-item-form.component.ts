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
import { OpenItem } from "../../model/items/open-item";
import { Tools } from "../../core/tools.module";

@Component({
  selector: 'app-create-open-item',
  templateUrl: './open-item-form.component.html',
  styleUrls: ['./open-item-form.component.scss']
})
export class OpenItemFormComponent implements OnChanges {

  @Input()
  public openItemToCreate: OpenItem;
  @Input()
  public levels: any[];

  @Output()
  public onSubmit: EventEmitter<OpenItem> = new EventEmitter<OpenItem>();
  @Output()
  public onCancel: EventEmitter<void> = new EventEmitter<void>();

  public openItemForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnChanges() {
    this.openItemForm = this.formBuilder.group({
      description: [this.openItemToCreate.description, Validators.required],
      correctAnswer: [this.openItemToCreate.correctAnswer, Validators.required],
      level: [this.openItemToCreate.level, Validators.required]
    });
  }

  public submit() {
    if (this.openItemForm.valid) {
      const openItemCreated: OpenItem = Tools.clone(this.openItemToCreate);
      Object.assign(openItemCreated, this.openItemForm.value);

      Tools.resetForm(this.openItemForm, this.openItemToCreate);
      this.onSubmit.emit(openItemCreated);
    } else {
      Tools.markedForm(this.openItemForm);
    }
  }

  public cancel() {
    Tools.resetForm(this.openItemForm, this.openItemToCreate);
    this.onCancel.emit();
  }

}

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
import {buildEmptyOpenItem, OpenItem} from "../../model/items/open-item";

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
      this.openItemToCreate.description = this.openItemForm.get('description').value;
      this.openItemToCreate.correctAnswer = this.openItemForm.get('correctAnswer').value;
      this.openItemToCreate.level = this.openItemForm.get('level').value;

      this.onSubmit.emit(this.openItemToCreate);
      this.cancel();
    }
  }

  public cancel() {
    this.openItemToCreate = buildEmptyOpenItem();
    this.openItemForm.reset();

    this.onCancel.emit();
  }

}

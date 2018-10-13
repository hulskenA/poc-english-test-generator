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

import { ElasticRequestorService } from '../../../../shared/service/elastic-requestor.service';

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

  constructor(private formBuilder: FormBuilder,
              private elasticService: ElasticRequestorService) { }

  ngOnChanges() {
    this.openItemForm = this.formBuilder.group({
      description: [this.openItemToCreate.description, Validators.required],
      correctAnswer: [this.openItemToCreate.correctAnswer, Validators.required],
      level: [this.openItemToCreate.level, Validators.required]
    });
  }

  public submit() {
    if (this.openItemForm.valid) {
      const openItemCreated: OpenItem = Object.assign(this.openItemToCreate, this.openItemForm.getRawValue());

      this.onSubmit.emit(openItemCreated);
      this.openItemForm.reset(this.openItemToCreate, {
        emitEvent: false
      });
    }
  }

  public cancel() {
    this.openItemForm.reset(this.openItemToCreate);
    this.onCancel.emit();
  }

}

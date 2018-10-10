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
      const openItem: OpenItem = {
        id: null,
        type: 'OpenItem',
        seenBy: [],
        description: this.openItemForm.get('description').value,
        correctAnswer: this.openItemForm.get('correctAnswer').value,
        content: null,
        level: this.openItemForm.get('level').value,
        validated: true
      };

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

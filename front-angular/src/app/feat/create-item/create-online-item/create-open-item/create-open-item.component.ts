import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import {OpenItem} from "../../../../shared/model/items/open-item";
import {log} from "util";

@Component({
  selector: 'app-create-open-item',
  templateUrl: './create-open-item.component.html',
  styleUrls: ['./create-open-item.component.scss']
})
export class CreateOpenItemComponent implements OnInit {

  @Input()
  public openItemToCreate: OpenItem;
  @Input()
  public levels: any[];

  public openItemForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.openItemForm = this.formBuilder.group({
      description: [this.openItemToCreate.description, Validators.required],
      correctAnswer: [this.openItemToCreate.correctAnswer, Validators.required],
      level: [this.openItemToCreate.level, Validators.required]
    });
  }

  public onSubmit() {
    if (this.openItemForm.valid) {
      this.openItemToCreate.description = this.openItemForm.get('description').value;
      this.openItemToCreate.correctAnswer = this.openItemForm.get('correctAnswer').value;
      this.openItemToCreate.level = this.openItemForm.get('level').value;

      log(this.openItemToCreate);
    }
  }

}

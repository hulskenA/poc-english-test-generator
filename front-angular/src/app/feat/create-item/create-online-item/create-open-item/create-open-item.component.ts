import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { Level } from "../../../../shared/model/level";
import {OpenItem} from "../../../../shared/model/items/open-item";
import {log} from "util";

@Component({
  selector: 'app-create-open-item',
  templateUrl: './create-open-item.component.html',
  styleUrls: ['./create-open-item.component.css']
})
export class CreateOpenItemComponent implements OnInit {

  public openItemForm: FormGroup;
  public levels: any[] = Object.keys(Level);

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.openItemForm = this.formBuilder.group({
      description: ['', Validators.required],
      correctAnswer: ['', Validators.required],
      level: ['', Validators.required]
    })
  }

  public onSubmit() {
    if (this.openItemForm.valid) {
      const openItem: OpenItem = {
        id: null,
        type: 'OpenItem',
        seenBy: [],
        description: this.openItemForm.get('description').value,
        correctAnswer: this.openItemForm.get('correctAnswer').value,
        content: null,
        level: this.openItemForm.get('level').value,
      };

      log(openItem);
    }
  }

}

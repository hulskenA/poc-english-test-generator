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
import {OpenItem} from "../../model/items/open-item";
import {log} from "util";

import { ElasticRequestorService } from '../../../../shared/service/elastic-requestor.service';

@Component({
  selector: 'app-create-open-item',
  templateUrl: './open-item-form.component.html',
  styleUrls: ['./open-item-form.component.scss']
})
export class OpenItemFormComponent implements OnInit {

  @Input()
  public openItemToCreate: OpenItem;
  @Input()
  public levels: any[];

  public openItemForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private elasticService: ElasticRequestorService) { }

  ngOnInit() {
    this.openItemForm = this.formBuilder.group({
      description: [this.openItemToCreate.description, Validators.required],
      correctAnswer: [this.openItemToCreate.correctAnswer, Validators.required],
      level: [this.openItemToCreate.level, Validators.required]
    });
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
        validated: true
      };

      this.elasticService.createItem(openItem).subscribe(data => {
        console.log(data);
      });
    }
  }

}

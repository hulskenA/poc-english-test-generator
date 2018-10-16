import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Level} from "../../../shared/model/level";
import {Item} from "../../../shared/model/item";

import { ElasticRequestorService } from '../../../shared/service/elastic-requestor.service';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent implements OnInit {

  @Output()
  public onFilter: EventEmitter<Item[]> = new EventEmitter<Item[]>();

  public filterForm: FormGroup;
  public levels: string[] = [];

  constructor(private formBuilder: FormBuilder, private elasticService : ElasticRequestorService) { }

  ngOnInit() {
    this.filterForm = this.formBuilder.group({
      description: ['',],
      type: [null,],
      level: [null,],
      onlyValidated: [false,]
    });

    Object.keys(Level).forEach(key => {
      this.levels.push(Level[key]);
    })
  }

  public send(): void {
    this.elasticService.search(this.filterForm.value.description, this.filterForm.value.type,
                               this.filterForm.value.level, this.filterForm.value.onlyValidated)
                               .subscribe(data => {
                                 this.onFilter.emit(data);
                               });
  }

}

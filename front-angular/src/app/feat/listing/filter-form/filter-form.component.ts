import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Level} from "../../../shared/model/level";
import {Item} from "../../../shared/model/item";

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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.filterForm = this.formBuilder.group({
      description: ['',],
      type: [null,],
      level: [null,],
      all: [true,]
    });

    Object.keys(Level).forEach(key => {
      this.levels.push(Level[key]);
    })
  }

  public send(): void {

    console.log(Object.assign({}, this.filterForm));
  }

}

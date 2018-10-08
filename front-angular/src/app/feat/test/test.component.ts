import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Item} from "../../shared/model/item";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public itemList: Item[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(({itemList}) => {
      this.itemList = itemList;
    });
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {ReadingItem} from "../../../../shared/model/items/reading-item";

@Component({
  selector: 'app-create-reading-item',
  templateUrl: './create-reading-item.component.html',
  styleUrls: ['./create-reading-item.component.css']
})
export class CreateReadingItemComponent implements OnInit {

  @Input()
  public readingItemToCreate: ReadingItem;
  @Input()
  public levels: any[];

  constructor() { }

  ngOnInit() {
  }

}

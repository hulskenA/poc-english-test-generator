import {
  Component,
  OnInit
} from '@angular/core';
import {
  buildEmptyOpenItem,
  OpenItem
} from "../../../shared/model/items/open-item";
import {
  buildEmptyMultipleChoiceItem,
  MultipleChoiceItem
} from "../../../shared/model/items/multiple-choice-item";
import {
  buildEmptyReadingItem,
  ReadingItem
} from "../../../shared/model/items/reading-item";
import { Level } from "../../../shared/model/level";
import { Item } from "../../../shared/model/item";

@Component({
  selector: 'app-create-online-item',
  templateUrl: './create-item-group.component.html',
  styleUrls: ['./create-item-group.component.scss']
})
export class CreateItemGroupComponent implements OnInit {

  public emptyOpenItem: OpenItem;
  public emptyMultipleChoiceItem: MultipleChoiceItem;
  public emptyReadingItem: ReadingItem;

  public levels: string[] = [];

  constructor() { }

  ngOnInit() {
    this.emptyOpenItem = buildEmptyOpenItem();
    this.emptyMultipleChoiceItem = buildEmptyMultipleChoiceItem();
    this.emptyReadingItem = buildEmptyReadingItem();

    Object.keys(Level).forEach(key => {
      this.levels.push(Level[key]);
    })
  }

  public submitItem(itemToSend: Item): void {
    if (itemToSend)
      console.log(itemToSend);
  }

}

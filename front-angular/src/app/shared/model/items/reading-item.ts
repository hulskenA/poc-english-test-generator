import { Item } from "../item";
import { SimpleItem } from "./simple-item";

export interface ReadingItem extends Item {
  content: SimpleItem[]
}

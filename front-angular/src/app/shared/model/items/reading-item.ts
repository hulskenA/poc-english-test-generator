import { Item } from "../item";
import { SimpleItem } from "./simple-item";

export interface ReadingItem extends Item {
  content: SimpleItem[]
}

export function buildEmptyReadingItem(): ReadingItem {
  return <ReadingItem>{
    id: null,
    type: 'ReadingItem',
    seenBy: [],
    description: null,
    content: [],
    level: null
  };
}

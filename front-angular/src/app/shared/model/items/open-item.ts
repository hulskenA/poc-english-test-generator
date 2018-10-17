import {SimpleItem} from "./simple-item";

export interface OpenItem extends SimpleItem {
  correctAnswer: string
  content: string
}

export function buildEmptyOpenItem(): OpenItem {
  return <OpenItem>{
    id: null,
    type: 'OpenItem',
    seenBy: [],
    description: null,
    correctAnswer: null,
    content: null,
    level: null
  }
}

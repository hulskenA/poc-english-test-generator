import {SimpleItem} from "./simple-item";

export interface MultipleChoiceItem extends SimpleItem {
  correctAnswer: string[]
  content: string[]
}

export function buildEmptyMultipleChoiceItem(): MultipleChoiceItem {
  return <MultipleChoiceItem>{
    id: null,
    type: 'MultipleChoiceItem',
    seenBy: [],
    description: null,
    correctAnswer: null,
    content: [],
    level: null
  }
}

import {SimpleItem} from "./simple-item";

export interface PossibleChoice {
  text: string,
  isCorrect: boolean
}

export interface MultipleChoiceItem extends SimpleItem {
  correctAnswer: string,
  content: PossibleChoice[]
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

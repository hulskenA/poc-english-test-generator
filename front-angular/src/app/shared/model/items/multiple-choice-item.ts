import {SimpleItem} from "./simple-item";

export interface MultipleChoiceItem extends SimpleItem {
  correctAnswer: string[]
  content: string[]
}

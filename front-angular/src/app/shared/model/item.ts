import {Answer} from "./Answer";

export interface Item {
  id: number
  type: number
  question: string
  answer: Answer
}

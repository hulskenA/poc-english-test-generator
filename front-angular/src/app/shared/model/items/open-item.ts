import {SimpleItem} from "./simple-item";

export interface OpenItem extends SimpleItem {
  correctAnswer: string
  content: string
}

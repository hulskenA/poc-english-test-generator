export interface Item {
  id: string
  type: string
  level: number
  seenBy: number[]
  validated: boolean
  description: string
  content: any
}

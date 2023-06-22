export type User = {
  username: string | null  
}

export type Thought = {
  id: number,
  username: string,
  created_datetime: Date
  title: string,
  content: string
}

export type ThoughtState = {
  readonly data: Thought[]
}

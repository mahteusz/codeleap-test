type Props = {
  type: "create" | "update",
  title: string,
  content: string,
  border?: boolean,
  padding?: boolean,
  onTitleChange: (newTitle: string) => void
  onContentChange: (newContent: string) => void
}

export { type Props }
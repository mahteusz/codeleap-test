type Props = {
  title: string,
  content: string,
  onTitleChange: (newTitle: string) => void
  onContentChange: (newContent: string) => void
  onSubmit: () => void
}

export { type Props }
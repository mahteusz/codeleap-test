import { Thought } from "../../redux/reducers/"

type Props = {
  thought: Thought,
  onEdit: (id: number) => void
  onDelete: (id: number) => void
}

export { type Props }
import { Thought } from "../../redux/reducers/types"

type Props = {
  thought: Thought,
  onEdit: (id: number) => void
  onDelete: (id: number) => void
}

export { type Props }
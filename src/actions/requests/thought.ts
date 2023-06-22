import { Thought } from "../../redux/reducers/types"

const url = "https://dev.codeleap.co.uk/careers/"

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

export const createThoughtRequest = async (thought: Omit<Thought, "id">): Promise<Thought> => {
  const response = await fetch(url,
    {
      method: 'POST',
      body: JSON.stringify(thought),
      headers: headers
    }
  )
  const newThought = await response.json()
  return newThought
}

export const readThoughtsRequest = async () => {
  const response = await fetch(url)
  const thoughts = await response.json()
  return thoughts.results
}
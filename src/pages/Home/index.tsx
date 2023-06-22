import { useState, useEffect } from 'react'
import HomeContent from "../../components/HomeContent"
import ThoughtCard from "../../components/ThoughtCard"
import Container from "../../shared/styles/Container"
import * as S from './styled'
import { readThoughtsRequest } from "../../actions/requests/thought"
import { useSelector } from "react-redux"
import { State } from "../../redux/reducers"
import { useDispatch } from 'react-redux'
import { readThoughts } from '../../actions/thought'
import { updateThoughtRequest } from '../../actions/requests/thought'
import Modal from '../../components/Modal'
import ThoughtForm from '../../components/ThoughtForm'
import Button from '../../components/Button'

const Home = () => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [selectedThoughtId, setSelectedThoughtId] = useState<number>()
  const [updateModalOpen, setUpdateModalOpen] = useState<boolean>(false)
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false)

  const dispatch = useDispatch()
  const thoughts = useSelector((state: State) => state.thought)

  const handleEdit = (id: number) => {
    setSelectedThoughtId(id)
    setUpdateModalOpen(true)
  }

  const handleDelete = (id: number) => {
    setSelectedThoughtId(id)
    setDeleteModalOpen(true)
  }

  const handleEditSubmit = async() => {

  }

  useEffect(() => {
    const fetchAndDispatchThoughts = async () => {
      const allThoughts = await readThoughtsRequest()
      console.log(allThoughts)
      dispatch(readThoughts(allThoughts))
    }

    fetchAndDispatchThoughts()
  }, [])

  return (
    <Container>
      <Modal
        confirmButton={
          <Button onClick={handleEditSubmit} styleProps={{ variant: 'success' }}>
            Save
          </Button>
        }
        open={updateModalOpen}
        onClose={() => setUpdateModalOpen(!updateModalOpen)}
      >
        <ThoughtForm
          type='update'
          content={content}
          title={title}
          onContentChange={setContent}
          onTitleChange={setTitle}
        />
      </Modal>
      <S.ContentContainer>
        <HomeContent />
        {
          thoughts.data.map(thought => {
            return (
              <ThoughtCard
                thought={
                  {
                    id: thought.id,
                    title: thought.title,
                    content: thought.content,
                    created_datetime: thought.created_datetime,
                    username: thought.username
                  }
                }
                onDelete={() => handleDelete(thought.id)}
                onEdit={() => handleEdit(thought.id)}
              />
            )
          })
        }
      </S.ContentContainer>
    </Container>
  )
}

export default Home
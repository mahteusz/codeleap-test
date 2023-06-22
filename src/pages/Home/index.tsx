import { useState, useEffect } from 'react'
import { HomeContent } from "../../components/"
import { ThoughtCard } from "../../components/"
import Container from "../../shared/styles/Container"
import * as S from './styled'
import { deleteThoughtRequest, readThoughtsRequest } from "../../actions/"
import { useSelector } from "react-redux"
import { State } from "../../redux/reducers"
import { useDispatch } from 'react-redux'
import { deleteThougt, readThoughts, updateThought } from '../../actions/'
import { updateThoughtRequest } from '../../actions/requests/'
import { Modal } from '../../components/'
import { ThoughtForm } from '../../components/'
import { Button } from '../../components/'

const Home = () => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [selectedThoughtId, setSelectedThoughtId] = useState<number>()
  const [updateModalOpen, setUpdateModalOpen] = useState<boolean>(false)
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false)
  const [isLoadingData, setIsLoadingData] = useState<boolean>(true)

  const dispatch = useDispatch()
  const thoughts = useSelector((state: State) => state.thought)

  const handleUpdate = (id: number) => {
    const thought = findThought(id)
    setContent(thought.content)
    setTitle(thought.title)
    setSelectedThoughtId(id)
    setUpdateModalOpen(true)
  }

  const handleDelete = (id: number) => {
    setSelectedThoughtId(id)
    setDeleteModalOpen(true)
  }

  const findThought = (id: number) => {
    const found = thoughts.data.findIndex(thought => thought.id === id)
    return thoughts.data[found]
  }

  const handleUpdateSubmit = async () => {
    try {
      console.log(selectedThoughtId)
      await updateThoughtRequest(selectedThoughtId!, { content, title })
      dispatch(updateThought(selectedThoughtId!, { content, title }))
      setUpdateModalOpen(false)
    } catch (error) {
      console.warn("An error ocurred", error)
    }
  }

  const handleDeleteSubmit = async () => {
    try {
      await deleteThoughtRequest(selectedThoughtId!)
      dispatch(deleteThougt(selectedThoughtId!))
      setDeleteModalOpen(false)
    } catch (error) {
      console.warn("An error ocurred", error)
    }
  }

  const fetchData = async () => {
    const allThoughts = await readThoughtsRequest(thoughts.currentOffset)
    console.log(allThoughts)
    dispatch(readThoughts(allThoughts, thoughts.currentOffset))
    setIsLoadingData(false)
  }

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight || isLoadingData) {
      return
    }
    fetchData()
  }

  useEffect(() => {
    fetchData()
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoadingData])

  const updateModal = (
    <Modal
      confirmButton={
        <Button onClick={handleUpdateSubmit} styleProps={{ variant: 'success' }}>
          Save
        </Button>
      }
      open={updateModalOpen}
      onClose={() => setUpdateModalOpen(false)}
    >
      <ThoughtForm
        type='update'
        content={content}
        title={title}
        onContentChange={setContent}
        onTitleChange={setTitle}
      />
    </Modal>
  )

  const deleteModal = (
    <Modal
      title='Are you sure you want to delete this item?'
      confirmButton={
        <Button onClick={handleDeleteSubmit} styleProps={{ variant: 'warning' }}>
          Delete
        </Button>
      }
      open={deleteModalOpen}
      onClose={() => setDeleteModalOpen(false)}
    >
    </Modal>
  )

  return (
    <Container>
      {updateModal}
      {deleteModal}
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
                onEdit={() => handleUpdate(thought.id)}
              />
            )
          })
        }
      </S.ContentContainer>
    </Container>
  )
}

export default Home
import { useState } from 'react'
import * as S from './styled'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { State } from '../../redux/reducers'
import { createThoughtRequest } from '../../actions/requests/thought'
import { createThought } from '../../actions/thought'
import ThoughtForm from '../ThoughtForm'

const HomeContent = () => {

  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const dispatch = useDispatch()
  const auth = useSelector((state: State) => state.auth)

  const handleSubmit = async () => {
    try {
      const thought = await createThoughtRequest({
        title, content, created_datetime: new Date(), username: auth.username!
      })
      dispatch(createThought(thought))
    } catch (error) {
      console.warn("An error ocurred")
    }
  }

  return (
    <S.Container>
      <S.Header>
        <S.HeaderTitle>
          CodeLeap Network
        </S.HeaderTitle>
      </S.Header>
      <ThoughtForm
        content={content}
        title={title}
        onContentChange={setContent}
        onTitleChange={setTitle}
        onSubmit={handleSubmit}
      />
    </S.Container>
  )
}

export default HomeContent
import { useState } from 'react'
import Button from '../Button'
import * as S from './styled'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { State } from '../../redux/reducers'
import { createThoughtRequest } from '../../actions/requests/thought'
import ThoughtCard from '../ThoughtCard'
import { createThought } from '../../actions/thought'

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

      <S.ThoughtForm>
        <S.ThoughtFormTitle>
          What's on your mind?
        </S.ThoughtFormTitle>

        <S.ThoughtFormItem>
          <S.ThoughtFormLabel>
            Title
          </S.ThoughtFormLabel>
          <S.ThoughtFormInput
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder='Hello world'
          />
        </S.ThoughtFormItem>

        <S.ThoughtFormItem>
          <S.ThoughtFormLabel>
            Content
          </S.ThoughtFormLabel>
          <S.ThoughtFormTextArea
            onChange={(e) => setContent(e.target.value)}
            value={content}
            placeholder='Content here' />
        </S.ThoughtFormItem>

        <Button
          onClick={handleSubmit}
          styleProps={{
            variant: 'primary',
            alignSelf: 'flex-end'
          }}
        >
          Create
        </Button>
      </S.ThoughtForm>

      <ThoughtCard />
    </S.Container>
  )
}

export default HomeContent
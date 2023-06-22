import { Props } from './types'
import * as S from './styled'
import Button from '../Button'
import { createThoughtRequest } from '../../actions/'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../../redux/reducers'
import { createThought } from '../../actions/'


const ThoughtForm = ({ type, title, content, border, padding, onTitleChange, onContentChange }: Props) => {

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
    <S.Container border={border} padding={padding}>
      <S.ThoughtFormTitle>
        {type === 'create' ? "What's on your mind?" : "Edit item"}
      </S.ThoughtFormTitle>

      <S.ThoughtFormItem>
        <S.ThoughtFormLabel>
          Title
        </S.ThoughtFormLabel>
        <S.ThoughtFormInput
          onChange={(e) => onTitleChange(e.target.value)}
          value={title}
          placeholder='Hello world'
        />
      </S.ThoughtFormItem>

      <S.ThoughtFormItem>
        <S.ThoughtFormLabel>
          Content
        </S.ThoughtFormLabel>
        <S.ThoughtFormTextArea
          onChange={(e) => onContentChange(e.target.value)}
          value={content}
          placeholder='Content here' />
      </S.ThoughtFormItem>
      {
        type === 'create' &&
        <Button
          onClick={handleSubmit}
          styleProps={{
            variant: 'primary',
            alignSelf: 'flex-end'
          }}
        >
          Create
        </Button>
      }
    </S.Container>
  )
}

export default ThoughtForm
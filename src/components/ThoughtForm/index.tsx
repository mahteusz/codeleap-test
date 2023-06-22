import { Props } from './types'
import * as S from './styled'
import Button from '../Button'

const ThoughtForm = ({ title, content, onTitleChange, onContentChange, onSubmit }: Props) => {
  return (
    <S.Container>
      <S.ThoughtFormTitle>
        What's on your mind?
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

      <Button
        onClick={onSubmit}
        styleProps={{
          variant: 'primary',
          alignSelf: 'flex-end'
        }}
      >
        Create
      </Button>
    </S.Container>
  )
}

export default ThoughtForm
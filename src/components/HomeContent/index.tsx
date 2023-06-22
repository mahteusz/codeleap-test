import { useState } from 'react'
import * as S from './styled'
import ThoughtForm from '../ThoughtForm'

const HomeContent = () => {

  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  return (
    <S.Container>
      <S.Header>
        <S.HeaderTitle>
          CodeLeap Network
        </S.HeaderTitle>
      </S.Header>
      <S.FormContainer>
        <ThoughtForm
          type='create'
          border
          padding
          content={content}
          title={title}
          onContentChange={setContent}
          onTitleChange={setTitle}
        />
      </S.FormContainer>
    </S.Container>
  )
}

export default HomeContent
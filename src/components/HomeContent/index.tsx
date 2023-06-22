import { useState } from 'react'
import * as S from './styled'
import ThoughtForm from '../ThoughtForm'
import { Button } from '..'
import { useDispatch } from 'react-redux'
import { logout } from '../../actions'

const HomeContent = () => {

  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <S.Container>
      <S.Header>
        <S.HeaderItemsContainer>
          <S.HeaderTitle>
            CodeLeap Network
          </S.HeaderTitle>
          <Button
            onClick={handleLogout}
            styleProps={{
              variant:'outlined-light'
            }}
          >
            Logout
          </Button>
        </S.HeaderItemsContainer>
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
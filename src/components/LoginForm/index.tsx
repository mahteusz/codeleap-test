import { useState } from 'react'
import * as S from './styled'
import Button from '../Button'
import { useDispatch } from 'react-redux'
import { login } from '../../actions/auth'


const LoginForm = () => {
  const [username, setUsername] = useState<string>('')

  const dispatch = useDispatch()

  const onSubmit = () => {
    dispatch(login({ username }))
  }

  return (
    <S.FormContainer>
      <S.ContainerTitle>
        Welcome to the CodeLeap Network!
      </S.ContainerTitle>
      <S.UsernameLabel htmlFor='username-input'>
        Please enter your username
      </S.UsernameLabel>
      <S.UsernameInput
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        placeholder='John Doe' id="username-input"
      />
      <Button
        onClick={onSubmit}
        styleProps={{
          variant: "primary",
          alignSelf: 'flex-end',
          marginTop: 16,
          disabled: username === ""
        }}
      >
        Enter
      </Button>
    </S.FormContainer>
  )
}
export default LoginForm
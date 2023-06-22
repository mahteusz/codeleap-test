import { useState, useEffect } from 'react'
import * as S from './styled'
import Button from '../Button'
import { useDispatch } from 'react-redux'
import { login } from '../../actions/auth'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { State } from '../../redux/reducers'
import Spinner from '../Spinner'

const LoginForm = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [username, setUsername] = useState<string>('')

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector((state: State) => state.auth)

  const onSubmit = () => {
    dispatch(login({ username }))
    navigate("/home")
  }

  const redirectWhenLoggedIn = () => {
    if(auth.username) navigate("/home")
  }

  useEffect(() => {
    redirectWhenLoggedIn()
    setLoading(false)
  }, [])

  return (
    loading ? <Spinner /> : 
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
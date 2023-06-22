import * as S from './styled'
import Button from '../Button'

const LoginForm = () => {

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("On Submit")
  }

  return (
    <S.FormContainer onSubmit={onSubmit}>
      <S.ContainerTitle>
        Welcome to the CodeLeap Network!
      </S.ContainerTitle>
      <S.UsernameLabel htmlFor='username-input'>
        Please enter your username
      </S.UsernameLabel>
      <S.UsernameInput placeholder='John Doe' id="username-input"/>
      <Button
        onClick={() => {}}
        styleProps={{
          variant:"primary",
          alignSelf:'flex-end',
          marginTop:16,
        }}
      >
        Enter
      </Button>
    </S.FormContainer>
  )
}
export default LoginForm
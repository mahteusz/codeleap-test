import Button from '../Button'
import * as S from './styled'

const HomeContent = () => {
  return (
    <S.Container>
      <S.Header>
        <S.HeaderTitle>
          CodeLeap Network
        </S.HeaderTitle>
      </S.Header>

      <S.PostForm>
        <S.PostFormTitle>
          What's on your mind?
        </S.PostFormTitle>

        <S.PostFormItem>
        <S.PostFormLabel>
          Title
        </S.PostFormLabel>
        <S.PostFormInput placeholder='Hello world'/>
        </S.PostFormItem>

        <S.PostFormItem>
        <S.PostFormLabel>
          Content
        </S.PostFormLabel>
        <S.PostFormTextArea placeholder='Content here'/>
        </S.PostFormItem>

        <Button 
          onClick={() => {}}
          styleProps={{
            variant: 'primary',
            alignSelf: 'flex-end'
          }}
        >
          Create
        </Button>
      </S.PostForm>
    </S.Container>
  )
}

export default HomeContent
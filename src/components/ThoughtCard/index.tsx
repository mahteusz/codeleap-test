import { Thought } from '../../redux/reducers/types'
import * as S from './styled'

const ThoughtCard = ({ id, title, content, created_datetime, username }: Thought) => {
  return (
    <S.Container>
      <S.CardHeader>
        <S.CardHeaderTitle>
          {title}
        </S.CardHeaderTitle>
      </S.CardHeader>
      <S.CardContentContainer>
        <S.CardContentHeader>
          <S.CardContentUser>
            {username}
          </S.CardContentUser>
          <S.CardContentTime>
            {new Date(created_datetime).toDateString()}
          </S.CardContentTime>
        </S.CardContentHeader>
        <S.CardContentText>
          {content}
        </S.CardContentText>
      </S.CardContentContainer>
    </S.Container>
  )
}

export default ThoughtCard
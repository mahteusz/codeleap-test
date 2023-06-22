import { useSelector } from 'react-redux'
import { Thought } from '../../redux/reducers/types'
import * as S from './styled'
import { FaRegEdit } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'
import { State } from '../../redux/reducers'

const ThoughtCard = ({ id, title, content, created_datetime, username }: Thought) => {

  const auth = useSelector((state: State) => state.auth)

  return (
    <S.Container>
      <S.CardHeader>
        <S.CardHeaderTitle>
          {title}
        </S.CardHeaderTitle>
        {
          auth.username === username &&
          <S.IconsContainer>
            <MdDeleteForever />
            <FaRegEdit />
          </S.IconsContainer>
        }
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
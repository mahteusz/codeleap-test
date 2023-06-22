import { useSelector } from 'react-redux'
import * as S from './styled'
import { FaRegEdit } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'
import { State } from '../../redux/reducers'
import { Props } from './types'

const ThoughtCard = ({ thought, onDelete, onEdit }: Props) => {

  const formatUsername = () => {
    return `@${thought.username}`
  }

  const auth = useSelector((state: State) => state.auth)

  return (
    <S.Container>
      <S.CardHeader>
        <S.CardHeaderTitle>
          {thought.title}
        </S.CardHeaderTitle>
        {
          auth.username === thought.username &&
          <S.IconsContainer>
            <MdDeleteForever onClick={() => onDelete(thought.id)}/>
            <FaRegEdit onClick={() => onEdit(thought.id)}/>
          </S.IconsContainer>
        }
      </S.CardHeader>
      <S.CardContentContainer>
        <S.CardContentHeader>
          <S.CardContentUser>
            {formatUsername()}
          </S.CardContentUser>
          <S.CardContentTime>
            {new Date(thought.created_datetime).toDateString()}
          </S.CardContentTime>
        </S.CardContentHeader>
        <S.CardContentText>
          {thought.content}
        </S.CardContentText>
      </S.CardContentContainer>
    </S.Container>
  )
}

export default ThoughtCard
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

  const formatDate = () => {
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;
    const date = new Date(thought.created_datetime)
    const elapsed = Math.floor((new Date().getTime() - date.getTime()))

    if (elapsed < msPerMinute) {
      return "just now";
    }
    else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + ' minute(s) ago';
    }
    else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + ' hour(s) ago';
    }
    else if (elapsed < msPerMonth) {
      return Math.round(elapsed / msPerDay) + ' day(s) ago';
    }
    else if (elapsed < msPerYear) {
      return Math.round(elapsed / msPerMonth) + ' month(s) ago';
    }
    else {
      return Math.round(elapsed / msPerYear) + ' year(s) ago';
    }
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
            <MdDeleteForever onClick={() => onDelete(thought.id)} />
            <FaRegEdit onClick={() => onEdit(thought.id)} />
          </S.IconsContainer>
        }
      </S.CardHeader>
      <S.CardContentContainer>
        <S.CardContentHeader>
          <S.CardContentUser>
            {formatUsername()}
          </S.CardContentUser>
          <S.CardContentTime>
            {formatDate()}
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
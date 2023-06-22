import { useEffect } from 'react'
import HomeContent from "../../components/HomeContent"
import ThoughtCard from "../../components/ThoughtCard"
import Container from "../../shared/styles/Container"
import * as S from './styled'
import { readThoughtsRequest } from "../../actions/requests/thought"
import { useSelector } from "react-redux"
import { State } from "../../redux/reducers"
import { useDispatch } from 'react-redux'
import { readThoughts } from '../../actions/thought'

const Home = () => {

  const dispatch = useDispatch()
  const thoughts = useSelector((state: State) => state.thought)

  useEffect(() => {
    const fetchAndDispatchThoughts = async() => {
      const allThoughts = await readThoughtsRequest()
      console.log(allThoughts)
      dispatch(readThoughts(allThoughts))
    }

    fetchAndDispatchThoughts()
  }, [])

  return (
    <Container>
      <S.ContentContainer>
        <HomeContent />
        {
          thoughts.data.map(thought => {
            return(
              <ThoughtCard
                id={thought.id}
                title={thought.title}
                content={thought.content}
                created_datetime={thought.created_datetime}
                username={thought.username}
              />
            )
          })
        }
      </S.ContentContainer>
    </Container>
  )
}

export default Home
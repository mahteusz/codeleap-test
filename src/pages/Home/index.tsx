import HomeContent from "../../components/HomeContent"
import ThoughtCard from "../../components/ThoughtCard"
import Container from "../../shared/styles/Container"
import * as S from './styled'

const Home = () => {
  return (
    <Container>
      <S.ContentContainer>
        <HomeContent />
        <ThoughtCard />
      </S.ContentContainer>
    </Container>
  )
}

export default Home
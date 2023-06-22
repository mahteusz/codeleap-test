import HomeContent from "../../components/HomeContent"
import ThoughtCard from "../../components/ThoughtCard"
import Container from "../../shared/styles/Container"
import * as S from './styled'

const Home = () => {
  return (
    <Container>
      <S.ContentContainer>
        <HomeContent />
        <ThoughtCard 
          title="My first post at CodeLeap Network"
          content="Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.
          Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat."
          created_datetime={new Date}
          username="Mateus"
          id={123}
        />
        <ThoughtCard 
          title="My first post at CodeLeap Network"
          content="Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.
          Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat."
          created_datetime={new Date}
          username="Mateus"
          id={123}
        />
      </S.ContentContainer>
    </Container>
  )
}

export default Home
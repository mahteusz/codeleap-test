import * as S from './styled'
const ThoughtCard = () => {
  return (
    <S.Container>
      <S.CardHeader>
        <S.CardHeaderTitle>
          My first post at CodeLeapNetwork
        </S.CardHeaderTitle>
      </S.CardHeader>
      <S.CardContentContainer>
        <S.CardContentHeader>
          <S.CardContentUser>
            Victor
          </S.CardContentUser>
          <S.CardContentTime>
            25 minutes ago
          </S.CardContentTime>
        </S.CardContentHeader>
        <S.CardContentText>
          Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque
          
          suscipit. Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.

        </S.CardContentText>
      </S.CardContentContainer>
    </S.Container>
  )
}

export default ThoughtCard
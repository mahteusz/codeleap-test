import styled from "styled-components";

const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100%;
  height:100vh;
  background-color: ${props => props.theme.colors.background};
`

export default Container
import styled from "styled-components";

export const ContentContainer = styled.div`
  width:800px;
  height:100vh;
  background-color:${props => props.theme.colors.light};
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  gap:24px;
`
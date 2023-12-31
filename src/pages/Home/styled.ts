import styled from "styled-components";

export const ContentContainer = styled.div`
  width:800px;
  padding: 0 ${props => props.theme.spacing.default}px;
  padding-bottom: ${props => props.theme.spacing.default}px;
  min-height:100%;
  background-color:${props => props.theme.colors.light};
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  gap:${props => props.theme.spacing.default}px;

  
  @media (max-width: 900px) {
    width:100%;
    padding: 0;
    padding-bottom: ${props => props.theme.spacing.default}px;
  }
`
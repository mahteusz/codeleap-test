import styled from "styled-components";

export const Container = styled.div`
  position:fixed;
  left:0;
  top:0;
  right:0;
  bottom:0;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100vw;
  height:100vh;
  z-index:10;
  background-color:rgba(0,0,0,0.1);
`

export const ContentContainer = styled.div`
  padding:${props => props.theme.spacing.default}px;
  display:flex;
  flex-direction:column;
  background-color:${props => props.theme.colors.light};
  position:relative;
  min-width:660px;
`

export const ModalTitle = styled.h1`
  color:${props => props.theme.colors.dark};
  margin-bottom:${props => props.theme.spacing.default}px;
  font-family:${props => props.theme.fonts.primary};
  font-weight:700;
  font-size:${props => props.theme.fonts.sizes.xlarge};
`

export const ButtonsContainer = styled.div`
  margin-top:${props => props.theme.spacing.default}px;
  display:flex;
  align-self:flex-end;
  gap:${props => props.theme.spacing.small}px;
`
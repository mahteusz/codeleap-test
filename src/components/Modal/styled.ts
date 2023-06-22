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
  background-color:rgba(0,0,0,0.5);
`

export const ContentContainer = styled.div`
  padding:${props => props.theme.spacing.default}px;
  margin:0;
  background-color:${props => props.theme.colors.light};
  display:flex;
  flex-direction:column;
  align-items:center;
  width:660px;
  border-radius:${props => props.theme.border.radius.default}px;
  
  @media (max-width: 900px) {
    width:95%;
  }
`

export const ModalTitle = styled.h1<{visible: boolean}>`
  align-self:flex-start;
  display:${props => props.visible ? 'block' : 'none'};
  min-height:0;
  color:${props => props.theme.colors.dark};
  margin-bottom:${props => props.theme.spacing.default}px;
  font-family:${props => props.theme.fonts.primary};
  font-weight:700;
  font-size:${props => props.theme.fonts.sizes.xlarge};
`

export const ButtonsContainer = styled.div`
  margin:0 ${props => props.theme.spacing.default}px;
  display:flex;
  align-self:flex-end;
  gap:${props => props.theme.spacing.small}px;
`
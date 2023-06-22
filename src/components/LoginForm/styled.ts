import styled from "styled-components"

export const FormContainer = styled.main`
  background-color:${props => props.theme.colors.light};
  display:flex;
  align-items:baseline;
  flex-direction:column;
  width:500px;
  border:1px solid #ccc;
  border-radius:${props => props.theme.border.radius.default}px;
  outline:0;
  padding:24px;

  @media (max-width: 600px) {
    width:90%;
  }
`

export const ContainerTitle = styled.h1`
  color:${props => props.theme.colors.dark};
  font-family:${props => props.theme.fonts.primary};
  font-weight:700;
  font-size:${props => props.theme.fonts.sizes.xlarge};
  margin-bottom:${props => props.theme.spacing.default}px;
`

export const UsernameLabel = styled.label`
  color:${props => props.theme.colors.dark};
  font-family:${props => props.theme.fonts.primary};
  font-weight:400;
  font-size:${props => props.theme.fonts.sizes.medium};
  margin-bottom:${props => props.theme.spacing.xsmall}px;
`

export const UsernameInput = styled.input.attrs(({ }) => ({
  type: 'text'
}))`
  padding: 4px 10px;
  border-radius:${props => props.theme.border.radius.small}px;
  border:1px solid ${props => props.theme.colors.darkerGrey};
  width:100%;

  &:focus {
    outline: 1px solid ${props => props.theme.colors.primary};;
  }
`
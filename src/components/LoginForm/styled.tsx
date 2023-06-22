import styled from "styled-components"

export const FormContainer = styled.form`
  background-color:white;
  display:flex;
  align-items:baseline;
  flex-direction:column;
  width:500px;
  border:1px solid #ccc;
  border-radius:16px;
  padding:24px;
`

export const ContainerTitle = styled.h1`
  font-family:${props => props.theme.fonts.primary};
  font-weight:700;
  font-size:${props => props.theme.fonts.sizes.xlarge};
  margin-bottom:24px;
`

export const UsernameLabel = styled.label`
  font-family:${props => props.theme.fonts.primary};
  font-weight:400;
  font-size:${props => props.theme.fonts.sizes.medium};
  margin-bottom:8px;
`

export const UsernameInput = styled.input.attrs(({}) => ({
  type: 'text'
}))`
  padding: 4px 10px;
  border-radius:8px;
  border:1px solid #777;
  width:100%;

  &:focus {
    outline: 1px solid ${props => props.theme.colors.primary};;
  }
`
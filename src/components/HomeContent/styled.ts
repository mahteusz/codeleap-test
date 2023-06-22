import styled from 'styled-components'

export const Container = styled.div`
  width:800px;
  background-color:${props => props.theme.colors.light};
  display:flex;
  flex-direction:column;
  align-items:center;
`

export const Header = styled.header`
  height:80px;
  width:100%;
  background-color:${props => props.theme.colors.primary};
  display:flex;
  align-items:center;
  justify-content:center;
  margin-bottom:${props => props.theme.spacing.default}px;
`

export const HeaderItemsContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:90%;
`

export const HeaderTitle = styled.h1`
  color:${props => props.theme.colors.light};
  font-family:${props => props.theme.fonts.primary};
  font-weight:700;
  font-size:${props => props.theme.fonts.sizes.xlarge};
`

export const FormContainer = styled.div`
  width:100%;
  padding: 0 ${props => props.theme.spacing.default}px;
`

export const ThoughtForm = styled.main`
  display:flex;
  flex-direction:column;
  border: 1px solid ${props => props.theme.colors.grey};
  border-radius:${props => props.theme.border.radius.default}px;
  width:95%;
  padding:${props => props.theme.spacing.default}px;
`

export const ThoughtFormTitle = styled.h2`
  color:${props => props.theme.colors.dark};
  font-family:${props => props.theme.fonts.primary};
  font-weight:700;
  font-size:${props => props.theme.fonts.sizes.xlarge};
  margin-bottom:${props => props.theme.spacing.default}px;
`

export const ThoughtFormItem = styled.div`
  margin-bottom:${props => props.theme.spacing.default}px;
`

export const ThoughtFormLabel = styled.label`
  display:inline-block;
  color:${props => props.theme.colors.dark};
  font-family:${props => props.theme.fonts.primary};
  font-size:${props => props.theme.fonts.sizes.medium};
  margin-bottom:${props => props.theme.spacing.xsmall}px;

`

export const ThoughtFormInput = styled.input.attrs(({ }) => ({
  type: ''
}))`
  color:${props => props.theme.colors.dark};
  font-family:${props => props.theme.fonts.primary};
  font-size:${props => props.theme.fonts.sizes.small};
  padding: 4px 10px;
  border-radius:${props => props.theme.border.radius.small}px;
  border:1px solid ${props => props.theme.colors.darkerGrey};
  width:100%;

  &::placeholder {
    font-size:${props => props.theme.fonts.sizes.small};
  }

  &:focus {
    outline: 1px solid ${props => props.theme.colors.primary};;
  }
`

export const ThoughtFormTextArea = styled.textarea`
  color:${props => props.theme.colors.dark};
  font-family:${props => props.theme.fonts.primary};
  font-size:${props => props.theme.fonts.sizes.small};
  padding: 4px 10px;
  border-radius:${props => props.theme.spacing.small}px;
  border:1px solid ${props => props.theme.colors.darkerGrey};
  width:100%;
  resize:none;

  &::placeholder {
    font-size:${props => props.theme.fonts.sizes.small};
  }

  &:focus {
    outline: 1px solid ${props => props.theme.colors.primary};;
  }
`

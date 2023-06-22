import styled from 'styled-components'

export const Container = styled.main<{border?: boolean, padding?: boolean}>`
  display:flex;
  flex-direction:column;
  border:${props => props.border ? `1px solid ${props.theme.colors.grey}` : 0};
  border-radius:${props => props.theme.border.radius.default}px;
  width:100%;
  padding:${props => props.padding ? `${props.theme.spacing.default}px` : 0};
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

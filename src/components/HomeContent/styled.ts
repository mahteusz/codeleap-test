import styled from 'styled-components'

export const Container = styled.div`
  width:800px;
  height:100vh;
  background-color:${props => props.theme.colors.light};
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:24px;
`

export const Header = styled.header`
  height:80px;
  width:100%;
  background-color:${props => props.theme.colors.primary};
  display:flex;
  align-items:center;
  margin-bottom:24px;
`

export const HeaderTitle = styled.h1`
  color:${props => props.theme.colors.light};
  font-family:${props => props.theme.fonts.primary};
  font-weight:700;
  font-size:${props => props.theme.fonts.sizes.xlarge};
  margin-left:37px;
`

export const ThoughtForm = styled.main`
  display:flex;
  flex-direction:column;
  border: 1px solid #999;
  border-radius:16px;
  width:95%;
  padding:24px;
`

export const ThoughtFormTitle = styled.h2`
  color:${props => props.theme.colors.dark};
  font-family:${props => props.theme.fonts.primary};
  font-weight:700;
  font-size:${props => props.theme.fonts.sizes.xlarge};
  margin-bottom:24px;
`

export const ThoughtFormItem = styled.div`
  margin-bottom:24px;
`

export const ThoughtFormLabel = styled.label`
  display:inline-block;
  color:${props => props.theme.colors.dark};
  font-family:${props => props.theme.fonts.primary};
  font-size:${props => props.theme.fonts.sizes.medium};
  margin-bottom:8px;

`

export const ThoughtFormInput = styled.input.attrs(({ }) => ({
  type: ''
}))`
  color:${props => props.theme.colors.dark};
  font-family:${props => props.theme.fonts.primary};
  font-size:${props => props.theme.fonts.sizes.small};
  padding: 4px 10px;
  border-radius:8px;
  border:1px solid #777;
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
  border-radius:8px;
  border:1px solid #777;
  width:100%;
  resize:none;

  &::placeholder {
    font-size:${props => props.theme.fonts.sizes.small};
  }

  &:focus {
    outline: 1px solid ${props => props.theme.colors.primary};;
  }
`

import styled from 'styled-components'

export const Container = styled.article`
  display:flex;
  width:95%;
  flex-direction:column;
  align-items:center;
  border-radius: 16px 16px 0 0;
`

export const CardHeader = styled.header`
  height:70px;
  width:100%;
  background-color:${props => props.theme.colors.primary};
  display:flex;
  align-items:center;
  padding:24px;
  border-radius:inherit;
`

export const CardHeaderTitle = styled.h2`
  color:${props => props.theme.colors.light};
  font-family:${props => props.theme.fonts.primary};
  font-weight:700;
  font-size:${props => props.theme.fonts.sizes.xlarge};
`

export const CardContentContainer = styled.div`
  display:flex;
  width:100%;
  flex-direction:column;
  border: 1px solid #999;
  padding:24px;
`

export const CardContentHeader = styled.div`
  display:flex;
  justify-content:space-between;
  margin-bottom:16px;
`

export const CardContentUser = styled.span`
  color:#777;
  font-family:${props => props.theme.fonts.primary};
  font-weight:700;
  font-size:${props => props.theme.fonts.sizes.large};
`

export const CardContentTime = styled.span`
  color:#777;
  font-family:${props => props.theme.fonts.primary};
  font-size:${props => props.theme.fonts.sizes.large};
`

export const CardContentText = styled.span`
  color:${props => props.theme.colors.dark};
  font-family:${props => props.theme.fonts.primary};
  font-size:${props => props.theme.fonts.sizes.large};
`
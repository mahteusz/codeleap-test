import styled from 'styled-components'

export const Container = styled.article`
  display:flex;
  width:95%;
  flex-direction:column;
  align-items:center;
  border-radius:${props => props.theme.border.radius.default}px
                ${props => props.theme.border.radius.default}px
                0 0;
  
  >:last-child {
    margin-bottom:${props => props.theme.spacing.default}px;
  }
`

export const CardHeader = styled.header`
  height:70px;
  width:100%;
  background-color:${props => props.theme.colors.primary};
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:${props => props.theme.spacing.default}px;
  border-radius:inherit;
`

export const CardHeaderTitle = styled.h2`
  color:${props => props.theme.colors.light};
  font-family:${props => props.theme.fonts.primary};
  font-weight:700;
  font-size:${props => props.theme.fonts.sizes.xlarge};
`

export const IconsContainer = styled.div`
  display:flex; 
  gap:${props => props.theme.spacing.default}px;
  font-size:28px;
  color:${props => props.theme.colors.light};

  > * {
    transition:transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
      cursor:pointer;
    }
  }
`

export const CardContentContainer = styled.div`
  display:flex;
  width:100%;
  flex-direction:column;
  border: 1px solid ${props => props.theme.colors.grey};
  padding:${props => props.theme.spacing.default}px;
  border-radius:0 0 
                ${props => props.theme.border.radius.default}px
                ${props => props.theme.border.radius.default}px;
`

export const CardContentHeader = styled.div`
  display:flex;
  justify-content:space-between;
  margin-bottom:${props => props.theme.spacing.small}px;
`

export const CardContentUser = styled.span`
  color:${props => props.theme.colors.darkerGrey};
  font-family:${props => props.theme.fonts.primary};
  font-weight:700;
  font-size:${props => props.theme.fonts.sizes.large};
`

export const CardContentTime = styled.span`
  color:${props => props.theme.colors.darkerGrey};
  font-family:${props => props.theme.fonts.primary};
  font-size:${props => props.theme.fonts.sizes.large};
`

export const CardContentText = styled.span`
  color:${props => props.theme.colors.dark};
  font-family:${props => props.theme.fonts.primary};
  font-size:${props => props.theme.fonts.sizes.large};
`
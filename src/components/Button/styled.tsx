import styled from "styled-components"
import { StyleProps } from "./types"


export const Button = styled.button<StyleProps>`
  display:flex;
  align-items:center;
  justify-content:center;
  min-width:120px;
  height:32px;
  border:0;
  border-radius:8px;
  color:${props => props.theme.colors.light};
  font-family:${props => props.theme.fonts.primary};
  font-size:${props => props.theme.fonts.sizes.medium};
  font-weight:700;
  text-transform:${props => props.uppercase ? 'uppercase' : 'capitalize'};
  align-self:${props => props.alignSelf ? props.alignSelf : 'center'};
  margin-top:${props => props.marginTop}px;
  margin-right:${props => props.marginRight}px;
  margin-bottom:${props => props.marginBottom}px;
  margin-left:${props => props.marginLeft}px;

  transition:transform 0.3s ease;

  ${props => {
    switch (props.variant) {
      case 'primary':
        return `
          background-color:${props.theme.colors.primary};
        `

      case 'outlined':
        return `
          color:${props.theme.colors.dark};
          background-color:transparent;
          border:1px solid ${props.theme.colors.dark};
          font-weight:700;
        `
      case 'success':
        return `
          background-color:${props.theme.colors.success};
          font-weight:700;
        `

      case 'warning':
        return `
          background-color:${props.theme.colors.warning};
          font-weight:700;
        `
      case 'outlined-light':
        return `
          color:${props.theme.colors.light};
          background-color:transparent;
          border:1px solid ${props.theme.colors.light};
          font-weight:700;
        `
    }
  }}

  ${props => {
    if (props.disabled) {
      return `
        background-color:${props.theme.colors.grey};
        opacity:0.65;
      `
    } else {
      return `
        &:hover {
          transform: scale(1.05);
          cursor:pointer;
        }
      `
    }
  }}
`

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
          color:white;
        `

      case 'outlined':
        return `
          color:black;
          background-color:transparent;
          border:1px solid black;
          font-weight:700;
        `
      case 'success':
        return `
          background-color:${props.theme.colors.success};
          color:white;
          font-weight:700;
        `

      case 'warning':
        return `
          background-color:${props.theme.colors.warning};
          font-weight:700;
          color:white;
        `
    }
  }}

  ${props => {
    if (props.disabled) {
      return `
        background-color:${props.theme.colors.grey};
        opacity:0.8;
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

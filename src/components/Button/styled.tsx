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
  font-weight:${props => props.bold ? 700 : 400};
  text-transform:${props => props.uppercase? 'uppercase' : 'capitalize'};

  transition:transform 0.3s ease;

  ${props => {
    if (props.disabled) {
      return `
        background-color:${props.theme.colors.grey}
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
          background-color:white;
          border:1px solid black;
          font-weight:700;
        ` 
      case 'success':
        return `background-color:${props.theme.colors.success}`

      case 'warning':
        return `
          background-color:${props.theme.colors.warning};
          font-weight:700;
          color:white;
        `
    }
  }}
`

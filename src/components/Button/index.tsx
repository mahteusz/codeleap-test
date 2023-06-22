import * as S from './styled'
import { Props } from './types'

const Button = ({ children, onClick, styleProps }: Props) => {
  return (
    <S.Button 
      variant={styleProps.variant}
      disabled={styleProps.disabled}
      bold={styleProps.bold}
      uppercase={styleProps.uppercase}
      onClick={onClick}
    >
      {children}
    </S.Button>
  )
}

export default Button
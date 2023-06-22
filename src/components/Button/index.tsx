import * as S from './styled'
import { Props } from './types'

const Button = ({ children, onClick, styleProps }: Props) => {
  
  return (
    <S.Button 
      variant={styleProps.variant}
      disabled={styleProps.disabled}
      uppercase={styleProps.uppercase}
      alignSelf={styleProps.alignSelf}
      marginTop={styleProps?.marginTop ?? 0}
      marginRight={styleProps?.marginRight ?? 0}
      marginBottom={styleProps?.marginBottom ?? 0}
      marginLeft={styleProps?.marginLeft ?? 0}
      onClick={onClick}
    >
      {children}
    </S.Button>
  )
}

export default Button
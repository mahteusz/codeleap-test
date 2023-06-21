import 'styled-components'
import Theme from './defaultTheme'

export type ITheme = typeof Theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
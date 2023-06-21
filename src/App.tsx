import { ThemeProvider } from 'styled-components'
import Theme from './theme/defaultTheme'

const App = () => {

  return (
    <ThemeProvider theme={Theme}>
      <>
        Hello World
      </>
    </ThemeProvider>
  )
}

export default App
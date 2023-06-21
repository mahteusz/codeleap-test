import { ThemeProvider } from 'styled-components'
import Theme from './theme/defaultTheme'
import AppRoutes from './routes'

const App = () => {

  return (
    <ThemeProvider theme={Theme}>
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
import { ThemeProvider } from 'styled-components'
import Theme from './theme/defaultTheme'
import AppRoutes from './routes'
import { Provider } from 'react-redux'
import store from './redux'

const App = () => {

  return (
    <ThemeProvider theme={Theme}>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </ThemeProvider>
  )
}

export default App
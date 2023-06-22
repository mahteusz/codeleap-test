import { ThemeProvider } from 'styled-components'
import Theme from './theme/defaultTheme'
import AppRoutes from './routes'
import { Provider } from 'react-redux'
import store, { persistor } from './redux'
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={Theme}>
          <AppRoutes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
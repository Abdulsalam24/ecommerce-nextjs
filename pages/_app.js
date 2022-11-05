import { createStore } from 'redux'
import '../styles/globals.css'
import reducers from '../redux'

import { Provider} from 'react-redux'

const store = createStore(reducers)

function MyApp({ Component, pageProps }) {


  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp

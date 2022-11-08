import '../styles/globals.css'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../redux'

import { Provider } from 'react-redux'


function MyApp({ Component, pageProps }) {
  let composeEnhancers = compose;

  if (typeof window !== 'undefined') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))


  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp

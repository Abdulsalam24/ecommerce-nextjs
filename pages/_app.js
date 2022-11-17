
// import { SessionProvider } from "next-auth/react"

import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../redux'

import { Provider } from 'react-redux'

import { Provider } from "next-auth/client";

import "swiper/css/bundle";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../styles/globals.css'


function MyApp({ Component, pageProps }) {

  let composeEnhancers = compose;

  if (typeof window !== 'undefined') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))


  return (
    <Provider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="colored"
        />
      </Provider>
    </Provider>
  )
}

export default MyApp

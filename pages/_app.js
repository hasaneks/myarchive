import App from 'next/app'
import '../styles/globals.css'
import '../styles/variable.css'
//Redux
import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import store from '../redux/store'
//Context
import * as RectProvider from "../context/authentication";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider store={store}>
        <RectProvider.AuthenticationProvider>
          <Component {...pageProps} />
        </RectProvider.AuthenticationProvider>
      </Provider>
    )
  }
}

const makeStore = () => store
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(MyApp)

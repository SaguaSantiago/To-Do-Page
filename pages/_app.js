import React from 'react'

import '../styles/globals.css'
import { theme } from 'styles/theme'
import { ThemeProvider } from '@mui/material'

import { Provider } from 'react-redux'
import { store } from 'redux/Store'

import 'react-toastify/dist/ReactToastify.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  )
}

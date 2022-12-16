import React from 'react'

import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

import { ThemeProvider } from '@mui/material'
import { theme } from 'styles/theme'

import { Provider } from 'react-redux'
import { store } from 'redux/Store'

// import { Analytics } from '@vercel/analytics/react'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          {/* <Analytics /> */}
        </ThemeProvider>
      </Provider>
    </>
  )
}

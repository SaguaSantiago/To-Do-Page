import React from 'react'

import '../styles/globals.css'
import { ThemeProvider } from '@mui/material'
import { theme } from 'styles/theme'

import '../styles/colors.css'

export default function MyApp({ Component, pageProps }) {

  return (
    <>
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    </>
  )
}

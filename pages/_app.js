import React from 'react'

import '../styles/globals.css'
import { ThemeProvider } from '@mui/material'
import { theme } from 'styles/theme'

import '../styles/colors.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='stylesheet' href='https://use.typekit.net/gqw1hwz.css'></link>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

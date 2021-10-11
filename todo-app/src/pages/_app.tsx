import React from 'react'
import Footer from '../components/Footer'

import { AppProps } from 'next/app'

import '../styles/generic.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App

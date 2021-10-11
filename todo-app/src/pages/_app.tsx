import React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

import { AppProps } from 'next/app'

import '../styles/generic.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout title={'Task - Home'}>
      <Component {...pageProps} />
      <Footer />
    </Layout>
  )
}

export default App

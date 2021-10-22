import Layout from '../components/Layout'
import { AppProps } from 'next/app'

import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout title={'Quick Builds - Tiptap editor'}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App

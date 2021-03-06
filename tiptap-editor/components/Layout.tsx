import React from 'react'
import Head from 'next/head'

type LayoutProps = {
  title: string
  children: React.ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta charSet={'utf-8'} />
        <meta httpEquiv={'X-UA-Compatible'} content={'IE=edge'} />
        <meta
          name={'viewport'}
          content="width=device-width, initial-scale=1.0"
        />
        <title>{title}</title>
      </Head>
      {children}
    </>
  )
}

export default Layout

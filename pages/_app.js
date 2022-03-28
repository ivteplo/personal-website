// Copyright (c) 2022 Ivan Teplov

import Head from 'next/head'
import NavigationBar from '../components/NavigationBar'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ivan Teplov</title>
        <meta name="description" content="Ivan Teplov's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

// Copyright (c) 2022 Ivan Teplov

import Head from 'next/head'
import Footer from '../components/Footer'
import NavigationBar from '../components/NavigationBar'
import Page from '../components/Page'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ivan Teplov</title>
        <meta name="description" content="Ivan Teplov's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <NavigationBar />
        <Component {...pageProps} />
        <Footer />
      </Page>
    </>
  )
}

export default MyApp

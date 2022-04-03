// Copyright (c) 2022 Ivan Teplov

import Head from 'next/head'
import Header from '../components/layout/Header'

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Ivan Teplov</title>
      </Head>
      <Header centered mini>
        <h1>Blog</h1>
      </Header>
    </>
  )
}

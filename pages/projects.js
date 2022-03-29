// Copyright (c) 2022 Ivan Teplov

import Head from 'next/head'

import PageSection from '../components/PageSection'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Projects | Ivan Teplov</title>
      </Head>
      <Header>
        <h1>Projects</h1>
      </Header>
      <main>
        <PageSection title="Introduction">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut
            arcu at leo consequat luctus et sed turpis. Morbi commodo sagittis
            interdum. Vivamus et eleifend nulla, in semper nibh. Aenean iaculis
            tortor massa, nec facilisis libero gravida at. Praesent semper dolor
            ut odio ultrices auctor. Mauris in cursus leo. Phasellus porttitor,
            lectus ut vehicula elementum, nibh risus condimentum nisl, ut
            sollicitudin sem augue at lorem. Sed laoreet sem id justo ultrices,
            id auctor tellus cursus.
          </p>
        </PageSection>
      </main>
    </>
  )
}

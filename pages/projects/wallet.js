// Copyright (c) 2022 Ivan Teplov

import Head from 'next/head'
import PageSection from '../../components/layout/PageSection'
import ProjectHeader from '../../components/projects/ProjectHeader'

export default function WalletProject() {
  return (
    <>
      <Head>
        <title>Wallet for Loyalty Cards | Projects | Ivan Teplov</title>
      </Head>
      <ProjectHeader
        projectName="Wallet"
        title="Lightweight web application for storing loyalty cards"
        path="/projects/wallet"
      ></ProjectHeader>
      <PageSection title="The Challenge">
        <p>
          I came up with the idea of creating the Wallet app when I've found out
          about Stocard's storage usage. I didn't use all of the available
          features of that app, so I decided to make my own that will take much
          less space and have only the essential features.
        </p>
      </PageSection>
      {/* TODO */}
    </>
  )
}

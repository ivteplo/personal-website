// Copyright (c) 2022 Ivan Teplov

import project from '../../assets/projects/wallet.json'

import ProjectPage from '../../components/projects/ProjectPage'

import WideImage from '../../components/base/WideImage'
import PageSection from '../../components/layout/PageSection'
import ProjectImageGallery from '../../components/projects/ProjectImageGallery'

export default function WalletProject() {
  return (
    <ProjectPage
      project={project}
      title="Lightweight web application for storing loyalty cards"
    >
      <PageSection title="The Challenge">
        <p>
          I came up with the idea of creating the Wallet app when I've found out
          about Stocard's storage usage. I didn't use all of the available
          features of that app, so I decided to make my own that will take much
          less space and have only the essential features.
        </p>
      </PageSection>
      <PageSection title="Project Goals">
        <p>
          My main goal was to create a lightweight app that is easy to use on a
          daily basis.
        </p>
        <p>
          In order to keep the app lightweight, instead of keeping a big
          database with brand logos, I decided to go with gradients.
        </p>
        <p>
          The gradients are made with pastel colors that are randomly generated.
          You can edit a card and regenerate the gradient, in case you don't
          like the current one.
        </p>
        <WideImage
          src="/projects/wallet/customize.svg"
          alt="Example of pastel gradients generated by the app"
        />
      </PageSection>
      <PageSection title="Other Features">
        <ProjectImageGallery
          images={{
            'Responsive app': '/projects/wallet/responsive.svg',
            'Supports dark mode': '/projects/wallet/darkMode.svg',
          }}
        />
      </PageSection>
    </ProjectPage>
  )
}

// Copyright (c) 2022 Ivan Teplov

import Header from '../components/layout/Header'
import PageSection from '../components/layout/PageSection'
import ProjectPreview from '../components/projects/ProjectPreview'

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <>
      <Header centered>
        <h1>Ivan Teplov</h1>
        <p className={styles.headerSubtitle}>
          Full-Stack Web Developer and Software Engineer
        </p>
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
        <PageSection title="Projects">
          <div className={styles.projectPreviewsContainer}>
            <ProjectPreview
              project={{
                title: 'Wallet for Loyalty Cards',
                description: 'One place for all of your loyalty cards',
                path: '/projects/wallet',
              }}
            />
          </div>
        </PageSection>
      </main>
    </>
  )
}

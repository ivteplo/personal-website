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
            Hello! I'm Ivan Teplov, a full-stack web developer. I help
            individuals, teams, and companies make websites that work well both
            on computers, tablets, and phones.
          </p>
          <p>
            I believe that while building a website, developers should think
            more about users' needs and wishes. That's why I always add dark
            mode support for my websites and do my best at making all the pages
            accessible for visually impaired people.
          </p>
          <p>
            You can contact me if you need a personal website, a landing page,
            or a web app. It's better to have me in your project team after
            finishing the website design, so that I can jump straight into the
            working process.
          </p>
          <p>
            For making a website, I can use different frameworks that will make
            the project scalable and easy-to-update. I already have experience
            working with React, Next.js, Vue, and Svelte. In case of need, I can
            quickly learn a new framework.
          </p>
          <p>
            I'm unable to help anyone design a website, since I don't have a big
            experience working in this field. But you can ask a design studio or
            a freelancer to design a website for you, and I'll convert the
            design into a fully-working website.
          </p>
          <p></p>
        </PageSection>
        <PageSection title="Projects" id="projects">
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

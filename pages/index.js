// Copyright (c) 2022 Ivan Teplov

import Link from 'next/link'

import projects from '../assets/projects'
import contacts from '../assets/contactInfo'
import map from '../utilities/map'
import getSkills from '../utilities/getSkills'

import Header from '../components/layout/Header'
import PageSection from '../components/layout/PageSection'
import ProjectPreview from '../components/projects/ProjectPreview'

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  const skills = getSkills()

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
            I'm unable to help anyone design a website, since I don't have that
            much experience working in this field. But you can ask a design
            studio or a freelancer to design a website for you, and I'll convert
            the design into a fully-working website.
          </p>
          <p>
            My goal is to take experience of using websites to a higher level,
            so that they seem to be a good choice even compared to native apps.
          </p>
        </PageSection>
        <PageSection title="Projects" id="projects">
          <div className={styles.projectPreviewsContainer}>
            {map(projects, ({ fullName, description, path }) => (
              <ProjectPreview
                project={{
                  title: fullName,
                  description,
                  path,
                }}
                key={path}
              />
            ))}
          </div>
        </PageSection>
        <PageSection title="Skills">
          <p>
            Please, take a note that not all of my projects are there. You can
            find more on my{' '}
            <Link href={contacts.GitHub.link}>
              <a className="underlined" target="_blank">
                GitHub profile
              </a>
            </Link>
            .
          </p>
          <div className={styles.skills}>
            {map(skills, (skill, key) => (
              <details key={key} className={styles.skillGroup}>
                <summary>
                  {skill.displayName} - {skill.projects.length} project
                  {skill.projects.length !== 1 ? 's' : ''}
                </summary>
                <ul>
                  {map(skill.projects, ({ projectName, repository }) => (
                    <li key={projectName}>
                      <Link href={repository}>
                        <a>{projectName}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </PageSection>
      </main>
    </>
  )
}

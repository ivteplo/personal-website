// Copyright (c) 2022 Ivan Teplov

import Head from 'next/head'

import PageSection from '../layout/PageSection'
import ProjectHeader from './ProjectHeader'
import ProjectRepository from './ProjectRepository'
import ProjectTechnologies from './ProjectTechnologies'

import previewImagePath from './_previewImagePath'

export default function ProjectPage({
  project = {
    name: '',
    fullName: '',
    description: '',
    path: '',
    technologies: [],
    repository: '',
  },
  title = '',
  children,
}) {
  // TODO: find a way to 'dynamically' get the domain name
  return (
    <>
      <Head>
        <title>{project.fullName} | Projects | Ivan Teplov</title>
        <meta
          name="og:title"
          content={`${project.fullName} | Projects | Ivan Teplov`}
        />
        <meta name="og:description" content={project.description} />
        <meta name="og:type" content="article" />
        <meta
          name="og:image"
          content={
            'https://ivanteplov.vercel.app' + previewImagePath(project.path)
          }
        />
        <meta name="og:url" content="https://ivanteplov.vercel.app" />
      </Head>
      <ProjectHeader
        projectName={project.name}
        title={title}
        path={project.path}
      ></ProjectHeader>
      {children}
      <PageSection title="Used Technologies">
        <ProjectTechnologies technologies={project.technologies} />
      </PageSection>
      <PageSection>
        <ProjectRepository link={project.repository} />
      </PageSection>
    </>
  )
}

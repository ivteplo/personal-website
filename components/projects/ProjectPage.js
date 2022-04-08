// Copyright (c) 2022 Ivan Teplov

import Head from 'next/head'

import PageSection from '../layout/PageSection'
import ProjectHeader from './ProjectHeader'
import ProjectRepository from './ProjectRepository'
import ProjectTechnologies from './ProjectTechnologies'

export default function ProjectPage({
  project = {
    name: '',
    fullName: '',
    path: '',
    technologies: [],
    repository: '',
  },
  title = '',
  children,
}) {
  return (
    <>
      <Head>
        <title>{project.fullName} | Projects | Ivan Teplov</title>
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

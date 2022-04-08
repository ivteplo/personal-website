// Copyright (c) 2022 Ivan Teplov

import project from '../../assets/projects/personal-website.json'

import ProjectPage from '../../components/projects/ProjectPage'

import WideImage from '../../components/base/WideImage'
import PageSection from '../../components/layout/PageSection'

export default function PersonalWebsiteProject() {
  return (
    <ProjectPage project={project} title="Personal portfolio and blog">
      <PageSection title="The Challenge">
        <p>
          I needed to make a personal website in order to tell about myself from
          the development aspect. I wanted not to stretch the time I spend doing
          it, so I set myself a deadline of two weeks. I had to design a
          fully-functional website that has all the main features.
        </p>
      </PageSection>
      <PageSection title="Project Goals">
        <p>
          My main goal was to create a website that will tell more about me as a
          developer. I'd already made a portfolio website before I started
          developing this one, but I decided to change my development stack and
          start from scratch in order to make the new website scalable and come
          up with new design ideas.
        </p>
        <p>
          I decided to focus on telling more about projects I've made instead of
          just putting a list of skills and links to GitHub repositories.
        </p>
        <WideImage
          src="/projects/personal-website/project-showcase.svg"
          alt="Example of a project page"
        />
        <p>
          Also I wanted the website to be aesthetically pleasing to it's
          visitors, so I spent some time designing website pages in Figma.
        </p>
        <WideImage
          src="/projects/personal-website/design.svg"
          alt="Page design example"
        />
      </PageSection>
    </ProjectPage>
  )
}

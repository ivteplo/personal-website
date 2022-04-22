// Copyright (c) 2022 Ivan Teplov

import projects from '../assets/projects'
import otherSkills from '../assets/otherSkills.json'

function addTechnologiesTo(skills, technologies, projectName, repository) {
  for (const technology of technologies) {
    const key = technology.toLowerCase()

    if (!skills[key]) {
      skills[key] = {
        displayName: technology,
        projects: [],
      }
    }

    skills[key].projects.push({
      projectName,
      repository,
    })
  }
}

export default function getSkills() {
  const skills = {}

  for (const { fullName, repository, technologies } of Object.values(
    projects
  )) {
    addTechnologiesTo(skills, technologies, fullName, repository)
  }

  for (const [title, { repository, technologies }] of Object.entries(
    otherSkills
  )) {
    addTechnologiesTo(skills, technologies, title, repository)
  }

  const sortedKeys = Object.keys(skills).sort(
    (skill1, skill2) =>
      skills[skill2].projects.length - skills[skill1].projects.length
  )

  const sortedSkills = {}

  for (const key of sortedKeys) {
    sortedSkills[key] = skills[key]
  }

  return sortedSkills
}

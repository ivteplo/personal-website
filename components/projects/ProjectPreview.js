// Copyright (c) 2022 Ivan Teplov

import Image from 'next/image'
import Link from 'next/link'
import previewImagePath from './_previewImagePath'
import styles from '../../styles/projects/ProjectPreview.module.css'

/**
 * @param {object} props
 * @param {object} props.project
 * @param {string} props.project.title
 * @param {string} props.project.description
 * @param {string} props.project.path - link to the project page. Also, the image is fetched by appending `/preview.svg` to this property's value
 */
export default function ProjectPreview({ project }) {
  return (
    <div className={styles.projectPreview}>
      <div className={styles.projectInfo}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <Link href={project.path}>
          <a className={styles.learnMoreButton}>View the project</a>
        </Link>
      </div>
      <div className={styles.projectImageWrapper}>
        <Image
          src={previewImagePath(project.path)}
          alt={`Preview of the '${project.title}' project`}
          layout="fill"
          className={styles.projectImage}
          objectFit="cover"
        />
      </div>
    </div>
  )
}

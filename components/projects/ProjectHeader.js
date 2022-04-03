// Copyright (c) 2022 Ivan Teplov

import Image from 'next/image'
import Header from '../layout/Header'
import previewImagePath from './_previewImagePath'

import styles from '../../styles/projects/ProjectHeader.module.css'

export default function ProjectHeader({
  projectName,
  title = null,
  path,
  children,
}) {
  return (
    <Header>
      <div className={styles.projectInfo}>
        <span className={styles.projectName}>{projectName}</span>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={previewImagePath(path)}
          alt={projectName + ' preview image'}
          objectFit="cover"
          layout="fill"
        />
      </div>
      {children}
    </Header>
  )
}

// Copyright (c) 2022 Ivan Teplov

import classNames from 'classnames'
import Link from 'next/link'

import styles from '../../styles/projects/ProjectRepository.module.css'

export default function ProjectRepository({
  link,
  children,
  className,
  ...props
}) {
  const classes = classNames(styles.title, className)

  return (
    <h2 className={classes}>
      <Link href={link}>
        <a className="underlined">Project Repository</a>
      </Link>
    </h2>
  )
}

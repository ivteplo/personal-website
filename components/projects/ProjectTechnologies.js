// Copyright (c) 2022 Ivan Teplov

import classNames from 'classnames'
import styles from '../../styles/projects/ProjectTechnologies.module.css'

export default function ProjectTechnologies({
  technologies,
  className = '',
  ...props
}) {
  const classes = classNames(styles.list, className)

  return (
    <ul className={classes} {...props}>
      {technologies.map((tech) => (
        <li key={tech}>{tech}</li>
      ))}
    </ul>
  )
}

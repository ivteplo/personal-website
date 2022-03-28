// Copyright (c) 2022 Ivan Teplov

import classNames from 'classnames'
import styles from '../styles/PageSection.module.css'

export default function PageSection({ title, children, className, ...props }) {
  const classes = classNames(styles.pageSection, className)

  return (
    <section {...props} className={classes}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

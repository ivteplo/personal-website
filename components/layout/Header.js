// Copyright (c) 2022 Ivan Teplov

import classNames from 'classnames'
import styles from '../../styles/layout/Header.module.css'
import PageSection from './PageSection'

export default function Header({
  centered = false,
  mini = false,
  children = null,
  className = '',
  ...props
}) {
  const classes = classNames(
    styles.header,
    {
      [styles.centered]: !!centered,
      [styles.mini]: !!mini,
    },
    className
  )

  return (
    <PageSection as="header" {...props} className={classes}>
      {children}
    </PageSection>
  )
}

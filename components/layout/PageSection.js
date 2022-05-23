// Copyright (c) 2022 Ivan Teplov

import classNames from 'classnames'
import styles from '../../styles/layout/PageSection.module.css'

export default function PageSection({
  as: Tag = 'section',
  title,
  children,
  className,
  ...props
}) {
  const classes = classNames(styles.pageSection, className)

  return (
    <Tag {...props} className={classes}>
      {title && <h2>{title}</h2>}
      {children}
    </Tag>
  )
}

// Copyright (c) 2022 Ivan Teplov

import classNames from 'classnames'
import styles from '../styles/Header.module.css'

export default function Header({ centered = false, children, className, ...props }) {
  const classes = classNames(className, styles.header, {
    [styles.centered]: !!centered
  })

  return (
    <header className={classes}>
      {children}
    </header>
  )
}

// Copyright (c) 2022 Ivan Teplov

import classNames from 'classnames'
import styles from '../styles/Header.module.css'

export default function Header({
  centered = false,
  mini = false,
  children,
  className,
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
    <header {...props} className={classes}>
      {children}
    </header>
  )
}

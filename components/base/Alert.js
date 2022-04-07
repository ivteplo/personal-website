// Copyright (c) 2022 Ivan Teplov

import classNames from 'classnames'
import Overlay from './Overlay'

import styles from '../../styles/base/Alert.module.css'

export default function Alert({
  title,
  actions,
  children,
  className,
  ...props
}) {
  const classes = classNames(styles.alert, className)

  return (
    <Overlay className={classes} {...props}>
      {title && <h3>{title}</h3>}
      {children}
      {actions && <section className={styles.actionButtons}>{actions}</section>}
    </Overlay>
  )
}

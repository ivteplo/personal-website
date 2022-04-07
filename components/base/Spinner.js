// Copyright (c) 2022 Ivan Teplov

import classNames from 'classnames'
import styles from '../../styles/base/Spinner.module.css'

export default function Spinner({ className, ...props }) {
  const classes = classNames(styles.spinner, className)
  return (
    <div
      className={classes}
      aria-busy="true"
      role="progressbar"
      {...props}
    ></div>
  )
}

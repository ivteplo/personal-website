// Copyright (c) 2022 Ivan Teplov

import { useRef } from 'react'

import classNames from 'classnames'
import styles from '../../styles/base/Overlay.module.css'

export default function Overlay({
  visible = true,
  wrapperProps = {},
  className,
  children,
  onHide,
  closeOnBackgroundClick = true,
  ...props
}) {
  const wrapperClasses = classNames(styles.overlay, wrapperProps?.className)
  const classes = classNames(styles.innerWrapper, className)

  const contentsRef = useRef(undefined)
  const onClick = (event) => {
    if (contentsRef.current && onHide instanceof Function) {
      const element = contentsRef.current

      if (!element.contains(event.target) && closeOnBackgroundClick) {
        onHide()
      }
    }

    if (wrapperProps?.onClick instanceof Function) {
      wrapperProps.onClick(event)
    }
  }

  return (
    <div
      {...wrapperProps}
      aria-hidden={String(!visible)}
      className={wrapperClasses}
      onClick={onClick}
    >
      <main ref={contentsRef} {...props} className={classes}>
        {children}
      </main>
    </div>
  )
}

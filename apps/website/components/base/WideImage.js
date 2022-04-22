// Copyright (c) 2022 Ivan Teplov

import classNames from 'classnames'
import Image from 'next/image'

import styles from '../../styles/base/WideImage.module.css'

export default function WideImage({
  className,
  src,
  alt,
  wrapperProps = {},
  ...props
}) {
  const wrapperClasses = classNames(
    styles.imageWrapper,
    wrapperProps?.className
  )

  const imageClasses = classNames(styles.image, className)

  return (
    <div className={wrapperClasses} {...wrapperProps}>
      <Image
        className={imageClasses}
        src={src}
        alt={alt}
        objectFit="cover"
        layout="fill"
        {...props}
      />
    </div>
  )
}

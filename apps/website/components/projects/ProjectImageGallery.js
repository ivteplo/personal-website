// Copyright (c) 2022 Ivan Teplov

import Image from 'next/image'
import map from '../../utilities/map'

import styles from '../../styles/projects/ProjectImageGallery.module.css'

export default function ProjectImageGallery({ images, className, ...props }) {
  return (
    <div className={styles.gallery}>
      {map(images, (imagePath, description) => (
        <div key={imagePath} className={styles.galleryItem}>
          <div className={styles.imageWrapper}>
            <Image
              objectFit="cover"
              layout="fill"
              src={imagePath}
              alt=""
              aria-hidden="true"
              className={styles.image}
            />
          </div>
          <p>{description}</p>
        </div>
      ))}
    </div>
  )
}

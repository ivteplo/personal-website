// Copyright (c) 2022 Ivan Teplov

import Image from 'next/image'
import styles from '../styles/ProjectPreview.module.css'

export default function ProjectPreview() {
  return (
    <div className={styles.projectPreview}>
      <div className={styles.projectInfo}>
        <h3>Lorem</h3>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
      {/* Currently just a gray image */}
      <div className={styles.projectImageWrapper}>
        <Image
          src="data:image/svg+xml;base64,PCEtLSBDb3B5cmlnaHQgKGMpIDIwMjIgSXZhbiBUZXBsb3YgLS0+Cjxzdmcgdmlld0JveD0iMCAwIDUwIDUwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxyZWN0IHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iZ3JheSIgLz4KPC9zdmc+Cg=="
          alt="Project image"
          width="100%"
          height="100%"
          layout="responsive"
          className={styles.projectImage}
          objectFit="cover"
        />
      </div>
    </div>
  )
}

// Copyright (c) 2022 Ivan Teplov

import styles from '../styles/Page.module.css'

export default function Page({ children }) {
  return <div className={styles.page}>{children}</div>
}

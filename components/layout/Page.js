// Copyright (c) 2022 Ivan Teplov

import styles from '../../styles/layout/Page.module.css'
import Footer from './Footer'
import NavigationBar from './NavigationBar'

export default function Page({ children }) {
  return (
    <div className={styles.page}>
      <NavigationBar />
      {children}
      <div className={styles.spacer}></div>
      <Footer />
    </div>
  )
}

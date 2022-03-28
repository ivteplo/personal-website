// Copyright (c) 2022 Ivan Teplov

import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <header className={styles.header}>
          <h1>Ivan Teplov</h1>
          <p className={styles.headerSubtitle}>Full-Stack Web Developer</p>
        </header>
      </main>
    </div>
  )
}

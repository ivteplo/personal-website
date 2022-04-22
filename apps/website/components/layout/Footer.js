// Copyright (c) 2022 Ivan Teplov

import styles from '../../styles/layout/Footer.module.css'
import PageSection from './PageSection'

export default function Footer() {
  return (
    <PageSection as="footer" className={styles.footer}>
      <h2>Ivan Teplov</h2>
      <p>Copyright &copy; 2022 Ivan Teplov</p>
    </PageSection>
  )
}

// Copyright (c) 2022 Ivan Teplov

import { useState } from 'react'
import Link from 'next/link'

import MenuIcon from '../assets/icons/menu.svg'
import Overlay from './Overlay'

import styles from '../styles/NavigationBar.module.css'

function MenuSection({ title, children }) {
  return (
    <section className={styles.menuSection}>
      <h2 className={styles.menuSectionTitle}>{title}</h2>
      {children}
    </section>
  )
}

function Menu({ visible, onHide }) {
  return (
    <Overlay
      onHide={onHide}
      visible={visible}
      role="menu"
      className={styles.menu}
    >
      <button
        type="button"
        className={styles.closeMenuButton}
        onClick={onHide}
        title="Close the menu"
      >
        &times;
      </button>
      <MenuSection title="Pages">
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
      </MenuSection>
      <MenuSection title="Contact">
        <Link href="https://github.com/ivteplo">GitHub</Link>
        <Link href="https://instagram.com/iteplov7">Instagram</Link>
      </MenuSection>
    </Overlay>
  )
}

export default function NavigationBar() {
  const [isMenuShown, setIsMenuShown] = useState(false)

  const showMenu = () => setIsMenuShown(true)
  const hideMenu = () => setIsMenuShown(false)

  return (
    <>
      <nav className={styles.navigationBar}>
        <Link href="/">
          <a className={styles.logo}>Ivan Teplov</a>
        </Link>
        <button
          type="button"
          onClick={showMenu}
          className={styles.openMenuButton}
          title="Open menu"
        >
          <MenuIcon className={styles.openMenuButtonIcon} />
          <span>Menu</span>
        </button>
        <Menu visible={isMenuShown} onHide={hideMenu} />
      </nav>
    </>
  )
}

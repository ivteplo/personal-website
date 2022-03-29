// Copyright (c) 2022 Ivan Teplov

import { useState } from 'react'
import Link from 'next/link'

import MenuIcon from '../assets/icons/menu.svg'
import { MenuContext, Menu } from './Menu'

import styles from '../styles/NavigationBar.module.css'

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = () => setIsMenuOpen(true)
  const closeMenu = () => setIsMenuOpen(false)

  const menuContext = {
    isMenuOpen,
    openMenu,
    closeMenu,
  }

  return (
    <>
      <nav className={styles.navigationBar}>
        <Link href="/">
          <a className={styles.logo}>Ivan Teplov</a>
        </Link>
        <button
          type="button"
          onClick={openMenu}
          className={styles.openMenuButton}
          title="Open menu"
        >
          <MenuIcon className={styles.openMenuButtonIcon} />
          <span>Menu</span>
        </button>
        <MenuContext.Provider value={menuContext}>
          <Menu />
        </MenuContext.Provider>
      </nav>
    </>
  )
}

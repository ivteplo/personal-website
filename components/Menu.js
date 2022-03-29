// Copyright (c) 2022 Ivan Teplov

import { useContext, createContext } from 'react'
import classNames from 'classnames'
import Link from 'next/link'

import Overlay from './Overlay'

import styles from '../styles/Menu.module.css'

export const MenuContext = createContext({
  isMenuOpen: false,
  openMenu: () => {},
  closeMenu: () => {},
})

export function MenuLink({ onClick, href, className, ...props }) {
  const { closeMenu } = useContext(MenuContext)

  const handleClick = (event) => {
    closeMenu()

    if (onClick instanceof Function) {
      onClick(event)
    }
  }

  const classes = classNames(className, styles.menuLink)

  return (
    <Link href={href}>
      <a onClick={handleClick} className={classes} {...props}>
        {props.children}
      </a>
    </Link>
  )
}

export function MenuSection({ title, children }) {
  return (
    <section className={styles.menuSection}>
      <h2 className={styles.menuSectionTitle}>{title}</h2>
      {children}
    </section>
  )
}

export function Menu(props) {
  const { isMenuOpen, closeMenu } = useContext(MenuContext)

  return (
    <Overlay
      {...props}
      onHide={closeMenu}
      visible={isMenuOpen}
      role="menu"
      className={styles.menu}
    >
      <button
        type="button"
        className={styles.closeMenuButton}
        onClick={closeMenu}
        title="Close the menu"
      >
        &times;
      </button>
      <MenuSection title="Pages">
        <MenuLink href="/">Home</MenuLink>
        <MenuLink href="/projects">Projects</MenuLink>
        <MenuLink href="/blog">Blog</MenuLink>
      </MenuSection>
      <MenuSection title="Contact">
        <MenuLink href="https://github.com/ivteplo">GitHub</MenuLink>
        <MenuLink href="https://instagram.com/iteplov7">Instagram</MenuLink>
      </MenuSection>
    </Overlay>
  )
}

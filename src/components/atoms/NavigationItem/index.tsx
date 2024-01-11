import React from 'react'
import styles from './index.module.scss'

interface NavigationItemProps {
  url: string
  mobile: boolean
  children: React.ReactNode
}

export const NavigationItem = ({
  url,
  mobile,
  children,
}: NavigationItemProps) => {
  return (
    <a
      href={url}
      className={`${styles['br-navigation-item']} ${
        mobile
          ? styles['br-navigation-item--mobile']
          : styles['br-navigation-item--pc']
      }`}
    >
      {children}
    </a>
  )
}

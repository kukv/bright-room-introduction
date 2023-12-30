import styles from './index.module.scss'

interface NavigationItemProps {
  title: string
  url: string
  mobile: boolean
}

export const NavigationItem = ({ title, url, mobile }: NavigationItemProps) => {
  return (
    <a
      href={url}
      className={`${styles.text_style_default} ${
        mobile ? styles.text_style_mobile : styles.text_style_pc
      }`}
    >
      {title}
    </a>
  )
}

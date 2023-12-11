import styles from './index.module.scss'

interface CopyrightProps {
  year?: number
  name: string
  link: string
}

export const Copyright = ({
  year = new Date().getFullYear(),
  name,
  link,
  ...props
}: CopyrightProps) => {
  return (
    <p className={styles.text_color}>
      {`© ${year}`}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={link}
        className={`${styles.text_color} ${styles.underline_hover_animation}`}
      >
        {name}
      </a>
    </p>
  )
}

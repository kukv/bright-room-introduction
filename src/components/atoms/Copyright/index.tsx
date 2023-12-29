import styles from './index.module.scss'

interface CopyrightProps {
  publicationYear?: number
  holderName: string
  holderWebsiteLink: string
}

export const Copyright = ({
  publicationYear = new Date().getFullYear(),
  holderName,
  holderWebsiteLink,
  ...props
}: CopyrightProps) => {
  return (
    <p className={styles.text_color}>
      {`© ${publicationYear}`}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={holderWebsiteLink}
        className={`${styles.text_color} ${styles.text_margin} ${styles.underline_hover_animation}`}
      >
        {holderName}
      </a>
      <span className={`${styles.text_color}`}>All Rights Reserved</span>
    </p>
  )
}

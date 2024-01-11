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
}: CopyrightProps) => {
  return (
    <p className={styles['br-copyright--text-color']}>
      {`© ${publicationYear}`}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={holderWebsiteLink}
        className={`${styles['br-copyright--text-color']} ${styles['br-copyright--text-margin']} ${styles['br-copyright--underline-animation']}`}
      >
        {holderName}
      </a>
      <span className={styles['br-copyright--text-color']}>
        All Rights Reserved
      </span>
    </p>
  )
}

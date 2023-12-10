import styles from '@/components/atoms/Copylight/CopyLight.module.scss'
import React from 'react'

interface CopyLightProps {
  year?: number
  name: string
  link: string
}

export const CopyLight = ({
  year = new Date().getFullYear(),
  name,
  link,
  ...props
}: CopyLightProps) => {
  return (
    <p className={styles.storybookCopyLight}>
      {`© ${year}`}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={link}
        className={styles.storybookActor}
      >
        {name}
      </a>
    </p>
  )
}

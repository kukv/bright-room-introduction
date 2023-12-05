import React from 'react'

import { Actor } from '@/stories/footer/copylight/Actor'
import styles from '@/stories/footer/copylight/Copylight.module.scss'

interface CopyrightProps {
  year: number
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
    <p className={styles.storybookCopyLight}>
      {`© ${year}`}
      <Actor name={name} link={link} />
    </p>
  )
}

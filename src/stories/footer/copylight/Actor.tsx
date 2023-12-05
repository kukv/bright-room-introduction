import React from 'react'
import styles from '@/stories/footer/copylight/Actor.module.scss'

interface ActorProps {
  name: string
  link: string
}

export const Actor = ({ name, link, ...props }: ActorProps) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      className={styles.storybookActor}
    >
      {name}
    </a>
  )
}

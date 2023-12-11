import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  IconDefinition,
  faSquareFacebook,
  faSquareGithub,
  faSquareInstagram,
  faSquareXTwitter,
} from '@fortawesome/free-brands-svg-icons'
import styles from './index.module.scss'

const IconType = {
  X: 'x',
  Instagram: 'instagram',
  Github: 'github',
  Facebook: 'facebook',
} as const
type IconType = (typeof IconType)[keyof typeof IconType]

export const iconDefinition = (type: IconType): IconDefinition => {
  switch (type) {
    case IconType.X:
      return faSquareXTwitter
    case IconType.Instagram:
      return faSquareInstagram
    case IconType.Github:
      return faSquareGithub
    case IconType.Facebook:
      return faSquareFacebook
  }
}

interface SocialNetworkServiceIconIconProps {
  icon: IconType
  color: string
  link: string
}

export const SocialNetworkServiceIcon = ({
  icon,
  color,
  link,
  ...props
}: SocialNetworkServiceIconIconProps) => {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon
        className={styles.storybookSocial}
        icon={iconDefinition(icon)}
        beat={true}
        size="3x"
        color={color}
      />
    </Link>
  )
}

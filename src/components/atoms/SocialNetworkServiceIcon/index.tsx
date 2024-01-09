import { SizeProp } from '@fortawesome/fontawesome-svg-core'
import {
  IconDefinition,
  faSquareFacebook,
  faSquareGithub,
  faSquareInstagram,
  faSquareXTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import styles from './index.module.scss'

const IconType = {
  X: 'x',
  Instagram: 'instagram',
  Github: 'github',
  Facebook: 'facebook',
} as const
type IconType = (typeof IconType)[keyof typeof IconType]

const iconSelector = (type: IconType): IconDefinition => {
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
  type: IconType
  color: string
  size?: SizeProp
  link: string
}

export const SocialNetworkServiceIcon = ({
  type,
  color,
  size = '3x',
  link,
}: SocialNetworkServiceIconIconProps) => {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon
        className={styles['br-sns-icon']}
        icon={iconSelector(type)}
        beat={true}
        size={size}
        color={color}
      />
    </Link>
  )
}

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
  iconType: IconType
  iconColor: string
  externalLink: string
}

export const SocialNetworkServiceIcon = ({
  iconType,
  iconColor,
  externalLink,
}: SocialNetworkServiceIconIconProps) => {
  return (
    <Link href={externalLink} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon
        className={`${styles.storybookSocial}`}
        icon={iconSelector(iconType)}
        beat={true}
        size="3x"
        color={iconColor}
      />
    </Link>
  )
}

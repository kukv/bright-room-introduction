import { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import {
  faLaptopCode,
  faNetworkWired,
  faServer,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './index.module.scss'

const TechnologicalDomainIconType = {
  Frontend: 'frontend',
  Backend: 'backend',
  Infrastructure: 'infrastructure',
} as const
export type TechnologicalDomainIconType =
  (typeof TechnologicalDomainIconType)[keyof typeof TechnologicalDomainIconType]

const iconSelector = (type: TechnologicalDomainIconType): IconDefinition => {
  switch (type) {
    case TechnologicalDomainIconType.Frontend:
      return faLaptopCode
    case TechnologicalDomainIconType.Backend:
      return faServer
    case TechnologicalDomainIconType.Infrastructure:
      return faNetworkWired
  }
}

interface TechnologicalDomainIconProps {
  iconType: TechnologicalDomainIconType
}

export const TechnologicalDomainIcon = ({
  iconType,
}: TechnologicalDomainIconProps) => {
  return (
    <span className={`${styles.icon_circle}`}>
      <FontAwesomeIcon
        icon={iconSelector(iconType)}
        size="3x"
        color="#FFFFFF"
      />
    </span>
  )
}

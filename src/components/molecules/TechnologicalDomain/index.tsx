import {
  TechnologicalDomainIcon,
  TechnologicalDomainIconType,
} from '@/components/atoms/TechnologicalDomainIcon'
import styles from './index.module.scss'

interface TechnologicalDomainProps {
  iconType: TechnologicalDomainIconType
  domainName: string
  stackData: string
}

export const TechnologicalDomain = ({
  iconType,
  domainName,
  stackData,
}: TechnologicalDomainProps) => {
  return (
    <div className={`${styles.card}`}>
      <div className={`${styles.icon}`}>
        <TechnologicalDomainIcon iconType={iconType} />
      </div>
      <h3 className={`${styles.domain_title}`}>{domainName}</h3>
      <p className={`${styles.technology_stack}`}>{stackData}</p>
    </div>
  )
}

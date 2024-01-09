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
    <div className={styles['br-technological-domain--card']}>
      <div className={styles['br-technological-domain--icon']}>
        <TechnologicalDomainIcon type={iconType} />
      </div>
      <h3 className={styles['br-technological-domain--domain-title']}>
        {domainName}
      </h3>
      <p className={styles['br-technological-domain--technology-stack']}>
        {stackData}
      </p>
    </div>
  )
}

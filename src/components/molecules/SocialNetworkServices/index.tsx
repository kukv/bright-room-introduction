import { SocialNetworkServiceIcon } from '@/components/atoms/SocialNetworkServiceIcon'
import styles from './index.module.scss'

interface SocialNetworkServicesProps {
  iconColor: string
}

export const SocialNetworkServices = ({
  iconColor,
}: SocialNetworkServicesProps) => {
  return (
    <>
      <span className={`${styles.sns_icons}`}>
        <SocialNetworkServiceIcon
          iconType="x"
          iconColor={iconColor}
          externalLink="https://x.com/koki_nonaka"
        />
      </span>
      <span className={`${styles.sns_icons}`}>
        <SocialNetworkServiceIcon
          iconType="instagram"
          iconColor={iconColor}
          externalLink="https://instagram.com/kukv"
        />
      </span>
      <span className={`${styles.sns_icons}`}>
        <SocialNetworkServiceIcon
          iconType="facebook"
          iconColor={iconColor}
          externalLink="https://facebook.com/04x17"
        />
      </span>
      <span className={`${styles.sns_icons}`}>
        <SocialNetworkServiceIcon
          iconType="github"
          iconColor={iconColor}
          externalLink="https://github.com/kukv"
        />
      </span>
    </>
  )
}

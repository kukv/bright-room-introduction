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
      <span className={styles['br-sns-icons']}>
        <SocialNetworkServiceIcon
          type="x"
          color={iconColor}
          link="https://x.com/koki_nonaka"
        />
      </span>
      <span className={styles['br-sns-icons']}>
        <SocialNetworkServiceIcon
          type="instagram"
          color={iconColor}
          link="https://instagram.com/kukv"
        />
      </span>
      <span className={styles['br-sns-icons']}>
        <SocialNetworkServiceIcon
          type="facebook"
          color={iconColor}
          link="https://facebook.com/04x17"
        />
      </span>
      <span className={styles['br-sns-icons']}>
        <SocialNetworkServiceIcon
          type="github"
          color={iconColor}
          link="https://github.com/kukv"
        />
      </span>
    </>
  )
}

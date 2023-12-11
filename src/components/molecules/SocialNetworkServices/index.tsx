import { SocialNetworkServiceIcon } from '@/components/images/SocialNetworkServiceIcon'

interface SocialNetworkServicesProps {
  iconColor: string
}

export const SocialNetworkServices = ({
  iconColor,
  ...props
}: SocialNetworkServicesProps) => {
  return (
    <>
      <span className="mx-5">
        <SocialNetworkServiceIcon
          icon="x"
          color={iconColor}
          link="https://x.com/koki_nonaka"
        />
      </span>
      <span className="mx-5">
        <SocialNetworkServiceIcon
          icon="instagram"
          color={iconColor}
          link="https://instagram.com/kukv"
        />
      </span>
      <span className="mx-5">
        <SocialNetworkServiceIcon
          icon="facebook"
          color={iconColor}
          link="https://facebook.com/04x17"
        />
      </span>
      <span className="mx-5">
        <SocialNetworkServiceIcon
          icon="github"
          color={iconColor}
          link="https://github.com/kukv"
        />
      </span>
    </>
  )
}

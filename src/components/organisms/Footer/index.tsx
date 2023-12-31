import { Copyright } from '@/components/atoms/Copyright'
import { SocialNetworkServices } from '../../molecules/SocialNetworkServices'

export const Footer = () => {
  return (
    <footer className="bg-neutral-600">
      <div className="w-full flex justify-center pt-9 mb-9">
        <SocialNetworkServices iconColor="#ebebeb" />
      </div>
      <div className="w-full bg-neutral-700 p-4 text-center text-neutral-200">
        <Copyright
          holderName="koki nonaka"
          holderWebsiteLink="https://github.com/kukv"
        />
      </div>
    </footer>
  )
}

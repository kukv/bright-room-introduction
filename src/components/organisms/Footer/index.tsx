import { Copyright } from '@/components/atoms/Copyright'
import { SocialNetworkServices } from '../../molecules/SocialNetworkServices'

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-neutral-600 text-center text-white">
      <div className="container pt-9">
        <div className="mb-9 flex justify-center">
          <SocialNetworkServices iconColor="#ebebeb" />
        </div>
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

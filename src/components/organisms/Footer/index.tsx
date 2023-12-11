import { Copyright } from '@/components/atoms/Copyright'
import { SocialNetworkServices } from '../../molecules/SocialNetworkServices'

interface FooterProps {}

export const Footer = ({ ...props }: FooterProps) => {
  return (
    <footer className="flex flex-col items-center bg-neutral-200 text-center text-white dark:bg-neutral-600">
      <div className="container pt-9">
        <div className="mb-9 flex justify-center">
          <SocialNetworkServices iconColor="#ebebeb" />
        </div>
      </div>
      <div className="w-full bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
        <Copyright name="koki nonaka" link="https://github.com/kukv" />
      </div>
    </footer>
  )
}

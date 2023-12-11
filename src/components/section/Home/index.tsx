import { Logo } from '@/components/images/Logo'
import { SocialNetworkServices } from '@/components/molecules/SocialNetworkServices'
import { Navigation } from '@/components/organisms/Navigation'
import { SideMenu } from '@/components/organisms/SideMenu'
import styles from './index.module.scss'
import { useInView } from 'react-intersection-observer'
import { useNavigationViewStore } from '@/stores/NavigationViewStore'
import { useEffect } from 'react'

interface HomeProps {}

export const Home = ({ ...props }: HomeProps) => {
  const { ref, inView } = useInView({ trackVisibility: false, delay: 100 })
  const { viewSwitch } = useNavigationViewStore()

  useEffect(() => {
    viewSwitch(inView)
  }, [inView, viewSwitch])

  return (
    <header
      id="home"
      ref={ref}
      className={`h-screen ${styles.backgroundImage}`}
    >
      <Navigation />
      <SideMenu />
      <div className="flex w-full flex-col">
        <div className="mx-auto max-w-7xl pb-16 pt-40 text-center sm:px-6 lg:px-8 lg:pt-40">
          <div className="flex justify-center">
            <Logo size="medium" className="mb-5" />
          </div>
          <div className="flex justify-center">
            <h1 className="mb-10 text-4xl font-bold">Bright Room</h1>
          </div>
          <div className="flex justify-center">
            <h3 className="text-1xl mb-10">My portfolio site.</h3>
          </div>
          <div className="flex justify-center">
            <SocialNetworkServices iconColor="#000000" />
          </div>
        </div>
      </div>
    </header>
  )
}

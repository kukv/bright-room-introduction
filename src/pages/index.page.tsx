import { Footer } from '@/components/organisms/Footer'
import { Navigation } from '@/components/organisms/Navigation'
import { About } from '@/components/section/About'
import { Contact } from '@/components/section/Contact'
import { Home } from '@/components/section/Home'
import { Resume } from '@/components/section/Resume'
import { Skills } from '@/components/section/Skills'
import { Works } from '@/components/section/Works'
import { useMobileMenuStore } from '@/stores/MobileMenuStore'
import { useNavigationViewStore } from '@/stores/NavigationViewStore'
import styles from './index.page.module.scss'

const Index = () => {
  const { isView } = useNavigationViewStore()
  const { open } = useMobileMenuStore()

  return (
    <>
      <Home />
      <div
        className={`z-50 w-full ${styles.stickyNavbar} ${
          isView ? styles.hidden : ''
        }`}
      >
        <Navigation collapsedAction={open} />
      </div>
      <About />
      <Resume />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </>
  )
}

export default Index

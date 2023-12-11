import { Navigation } from '@/components/organisms/Navigation'
import styles from './index.page.module.scss'
import { Home } from '@/components/section/Home'
import { About } from '@/components/section/About'
import { Resume } from '@/components/section/Resume'
import { Works } from '@/components/section/Works'
import { Contact } from '@/components/section/Contact'
import { Footer } from '@/components/organisms/Footer'
import { useNavigationViewStore } from '@/stores/NavigationViewStore'
import { Skills } from '@/components/section/Skills'

const Index = () => {
  const { isView } = useNavigationViewStore()

  return (
    <>
      <Home />
      <div>
        <div
          className={`z-50 w-full ${styles.stickyNavbar} ${
            isView ? styles.hidden : ''
          }`}
        >
          <Navigation />
        </div>
        <About />
        <Resume />
        <Skills />
        <Works />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default Index

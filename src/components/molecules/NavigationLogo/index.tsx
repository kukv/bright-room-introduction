import { Logo } from '@/components/atoms/Logo'
import { ScreenReaderOnlyText } from '@/components/atoms/ScreenReaderOnlyText'
import styles from './index.module.scss'

export const NavigationLogo = () => {
  return (
    <a href="#" className={`${styles.navigation_logo}`}>
      <ScreenReaderOnlyText readerOnlyText="Bright Room" />
      <Logo logoSize="small" />
    </a>
  )
}

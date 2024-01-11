import Image from 'next/image'
import LogoImage from 'public/logo.png'
import styles from './index.module.scss'

const LogoSize = {
  small: 'small',
  medium: 'medium',
  large: 'large',
} as const
type LogoSize = (typeof LogoSize)[keyof typeof LogoSize]

interface LogoProps {
  logoSize: LogoSize
}

export const Logo = ({ logoSize }: LogoProps) => {
  return (
    <Image
      src={LogoImage}
      className={styles[`br-logo--size-${logoSize}`]}
      alt="Logo"
    />
  )
}

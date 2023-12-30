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
  additionalClass?: string
}

export const Logo = ({ logoSize, additionalClass = '' }: LogoProps) => {
  const imageSize = styles[`image_size_${logoSize}`]
  return (
    <Image
      src={LogoImage}
      className={`${imageSize} ${additionalClass}`}
      alt="Logo"
    />
  )
}

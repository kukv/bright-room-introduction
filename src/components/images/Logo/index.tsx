import Image from 'next/image'
import LogoImage from 'public/logo.png'

const Size = {
  small: 'small',
  medium: 'medium',
  large: 'large',
} as const
export type Size = (typeof Size)[keyof typeof Size]

const buildStyleClass = (size: Size, className?: string): string => {
  const baseClass = `${className} w-auto`

  if (size == Size.small) {
    return `h-10 ${baseClass}`
  }

  if (size == Size.medium) {
    return `h-36 ${baseClass}`
  }

  return `h-max ${baseClass}`
}

interface LogoProps {
  size: Size
  className?: string
}

export const Logo = ({ size, className, ...props }: LogoProps) => {
  const classes = buildStyleClass(size, className)

  return <Image src={LogoImage} className={classes} alt="Logo" />
}

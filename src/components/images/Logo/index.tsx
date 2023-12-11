const dir = process.env.BACKEND_URL

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

  return <img src={`${dir}/logo.png`} className={classes} alt="Logo" />
}

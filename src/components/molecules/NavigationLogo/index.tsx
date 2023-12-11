import { ScreenReaderOnlyText } from '@/components/atoms/ScreenReaderOnlyText'
import { Logo, Size } from '@/components/images/Logo'

interface NavigationLogoProps {
  text: string
  url: string
  size: Size
}

export const NavigationLogoLogo = ({
  text,
  url,
  size,
  ...props
}: NavigationLogoProps) => {
  return (
    <a href={url} className="-m-1.5 p-1.5">
      <ScreenReaderOnlyText text={text} />
      <Logo size={size} />
    </a>
  )
}

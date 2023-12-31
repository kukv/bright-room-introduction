import { NavigationItem } from '@/components/atoms/NavigationItem'

interface SectionLinksProps {
  isMobile: boolean
}

export const SectionLink = ({ isMobile }: SectionLinksProps) => {
  return (
    <>
      <NavigationItem title="Home" url="#home" mobile={isMobile} />
      <NavigationItem title="About" url="#about" mobile={isMobile} />
      <NavigationItem title="Resume" url="#resume" mobile={isMobile} />
      <NavigationItem title="Skills" url="#skills" mobile={isMobile} />
      <NavigationItem title="Works" url="#works" mobile={isMobile} />
      <NavigationItem title="Contact" url="#contact" mobile={isMobile} />
    </>
  )
}

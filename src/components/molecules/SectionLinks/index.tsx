import { NavigationItem } from '@/components/atoms/NavigationItem'

interface SectionLinksProps {
  isMobile: boolean
}

export const SectionLink = ({ isMobile }: SectionLinksProps) => {
  return (
    <>
      <NavigationItem url="#home" mobile={isMobile}>
        Home
      </NavigationItem>
      <NavigationItem url="#about" mobile={isMobile}>
        About
      </NavigationItem>
      <NavigationItem url="#resume" mobile={isMobile}>
        Resume
      </NavigationItem>
      <NavigationItem url="#skills" mobile={isMobile}>
        Skills
      </NavigationItem>
      <NavigationItem url="#works" mobile={isMobile}>
        Works
      </NavigationItem>
      <NavigationItem url="#contact" mobile={isMobile}>
        Contact
      </NavigationItem>
    </>
  )
}

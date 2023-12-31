import { NavigationItem } from '@/components/atoms/NavigationItem'
import { NavigationLogo } from '@/components/molecules/NavigationLogo'
import { useMobileMenuStore } from '@/stores/MobileMenuStore'
import { CollapsedMenuButton } from 'src/components/molecules/CollapsedMenuButton'

export const Navigation = () => {
  const { open } = useMobileMenuStore()

  return (
    <nav className="flex flex-row mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
      <div className="flex lg:flex-1">
        <NavigationLogo />
      </div>
      <div className="flex lg:hidden">
        <CollapsedMenuButton
          readerOnlyText="Open side menu"
          action={() => open()}
        />
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        <NavigationItem title="Home" url="#home" mobile={false} />
        <NavigationItem title="About" url="#about" mobile={false} />
        <NavigationItem title="Resume" url="#resume" mobile={false} />
        <NavigationItem title="Skills" url="#skills" mobile={false} />
        <NavigationItem title="Works" url="#works" mobile={false} />
        <NavigationItem title="Contact" url="#contact" mobile={false} />
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <NavigationItem title="Blog &rarr;" url="#" mobile={false} />
      </div>
    </nav>
  )
}

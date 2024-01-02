import { NavigationItem } from '@/components/atoms/NavigationItem'
import { NavigationLogo } from '@/components/molecules/NavigationLogo'
import { SectionLink } from '@/components/molecules/SectionLinks'
import { MouseEventHandler } from 'react'
import { CollapsedMenuButton } from 'src/components/molecules/CollapsedMenuButton'

interface NavigationProps {
  collapsedAction: MouseEventHandler<HTMLButtonElement> | undefined
}

export const Navigation = ({ collapsedAction }: NavigationProps) => {
  return (
    <nav className="flex flex-row mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
      <div className="flex lg:flex-1">
        <NavigationLogo />
      </div>
      <div className="flex lg:hidden">
        <CollapsedMenuButton
          readerOnlyText="Open side menu"
          action={collapsedAction}
        />
      </div>
      <div className="hidden lg:flex lg:gap-x-10">
        <SectionLink isMobile={false} />
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <NavigationItem title="Blog &rarr;" url="#" mobile={false} />
      </div>
    </nav>
  )
}

import { NavigationItem } from '@/components/atoms/NavigationItem'
import { CloseButton } from '@/components/molecules/CloseButton'
import { NavigationLogoLogo } from '@/components/molecules/NavigationLogo'
import { useMobileMenuStore } from '@/stores/MobileMenuStore'
import { Dialog } from '@headlessui/react'

interface SideMenuProps {}

export const SideMenu = ({ ...props }: SideMenuProps) => {
  const { isOpen, close } = useMobileMenuStore()

  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={isOpen}
      onClose={() => close()}
    >
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <NavigationLogoLogo text="Bright Room" url="#" size="small" />
          <CloseButton text="Bright Room" action={() => close()} />
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <NavigationItem title="Home" url="#home" mobile={true} />
              <NavigationItem title="About" url="#about" mobile={true} />
              <NavigationItem title="Resume" url="#resume" mobile={true} />
              <NavigationItem title="Skills" url="#skills" mobile={true} />
              <NavigationItem title="Works" url="#works" mobile={true} />
              <NavigationItem title="Contact" url="#contact" mobile={true} />
              <div className="py-6">
                <NavigationItem title="Blog &rarr;" url="#" mobile={true} />
              </div>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  )
}

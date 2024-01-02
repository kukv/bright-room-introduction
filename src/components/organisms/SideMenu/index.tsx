import { NavigationItem } from '@/components/atoms/NavigationItem'
import { CloseButton } from '@/components/molecules/CloseButton'
import { NavigationLogo } from '@/components/molecules/NavigationLogo'
import { SectionLink } from '@/components/molecules/SectionLinks'
import { Dialog } from '@headlessui/react'

interface SideMenuProps {
  isOpen: boolean
  closingAction: () => void
}

export const SideMenu = ({ isOpen, closingAction }: SideMenuProps) => {
  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={isOpen}
      onClose={closingAction}
    >
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <NavigationLogo />
          <CloseButton
            readerOnlyText="Close side menu"
            action={closingAction}
          />
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <SectionLink isMobile={true} />
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

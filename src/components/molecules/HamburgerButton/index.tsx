import { CollapsedMenuIcon } from '@/components/atoms/CollapsedMenuIcon'
import { ScreenReaderOnlyText } from '@/components/atoms/ScreenReaderOnlyText'
import { MouseEventHandler } from 'react'

interface HamburgerButtonProps {
  text: string
  action: MouseEventHandler<HTMLButtonElement> | undefined
}

export const HamburgerButton = ({ text, action }: HamburgerButtonProps) => {
  return (
    <button
      type="button"
      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
      onClick={action}
    >
      <ScreenReaderOnlyText readerOnlyText={text} />
      <CollapsedMenuIcon />
    </button>
  )
}

import { ScreenReaderOnlyText } from '@/components/atoms/ScreenReaderOnlyText'
import { Bar3Icon } from '@/components/images/Bars3Icon'
import { MouseEventHandler } from 'react'

interface HamburgerButtonProps {
  text: string
  action: MouseEventHandler<HTMLButtonElement> | undefined
}

export const HamburgerButton = ({
  text,
  action,
  ...props
}: HamburgerButtonProps) => {
  return (
    <button
      type="button"
      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
      onClick={action}
    >
      <ScreenReaderOnlyText text={text} />
      <Bar3Icon className="h-6 w-6" ariaHidden={true} />
    </button>
  )
}

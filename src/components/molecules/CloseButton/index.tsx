import { ScreenReaderOnlyText } from '@/components/atoms/ScreenReaderOnlyText'
import { Bar3Icon } from '@/components/images/Bars3Icon'
import { XMarkIcon } from '@/components/images/XMarkIcon'
import { MouseEventHandler } from 'react'

interface CloseButtonProps {
  text: string
  action: MouseEventHandler<HTMLButtonElement> | undefined
}

export const CloseButton = ({ text, action, ...props }: CloseButtonProps) => {
  return (
    <button
      type="button"
      className="-m-2.5 rounded-md p-2.5 text-gray-700"
      onClick={action}
    >
      <ScreenReaderOnlyText text={text} />
      <XMarkIcon className="h-6 w-6" ariaHidden={true} />
    </button>
  )
}

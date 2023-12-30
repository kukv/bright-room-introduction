import { CloseIcon } from '@/components/atoms/CloseIcon'
import { ScreenReaderOnlyText } from '@/components/atoms/ScreenReaderOnlyText'
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
      <ScreenReaderOnlyText readerOnlyText={text} />
      <CloseIcon />
    </button>
  )
}

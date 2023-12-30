import { CloseIcon } from '@/components/atoms/CloseIcon'
import { ScreenReaderOnlyText } from '@/components/atoms/ScreenReaderOnlyText'
import { MouseEventHandler } from 'react'
import styles from './index.module.scss'

interface CloseButtonProps {
  readerOnlyText: string
  action: MouseEventHandler<HTMLButtonElement> | undefined
}

export const CloseButton = ({ readerOnlyText, action }: CloseButtonProps) => {
  return (
    <button type="button" className={`${styles.button_style}`} onClick={action}>
      <ScreenReaderOnlyText readerOnlyText={readerOnlyText} />
      <CloseIcon />
    </button>
  )
}

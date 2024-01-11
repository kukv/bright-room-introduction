import { CollapsedMenuIcon } from '@/components/atoms/CollapsedMenuIcon'
import { ScreenReaderOnlyText } from '@/components/atoms/ScreenReaderOnlyText'
import { MouseEventHandler } from 'react'
import styles from './index.module.scss'

interface CollapsedMenuButtonProps {
  readerOnlyText: string
  action: MouseEventHandler<HTMLButtonElement> | undefined
}

export const CollapsedMenuButton = ({
  readerOnlyText,
  action,
}: CollapsedMenuButtonProps) => {
  return (
    <button
      type="button"
      className={styles['br-collapsed-menu-button']}
      onClick={action}
    >
      <ScreenReaderOnlyText readerOnlyText={readerOnlyText} />
      <CollapsedMenuIcon />
    </button>
  )
}

import styles from './index.module.scss'

interface ScreenReaderOnlyTextProps {
  readerOnlyText: string
}

export const ScreenReaderOnlyText = ({
  readerOnlyText,
}: ScreenReaderOnlyTextProps) => {
  return (
    <>
      <span className={styles['br-sr-only']}>{readerOnlyText}</span>
    </>
  )
}

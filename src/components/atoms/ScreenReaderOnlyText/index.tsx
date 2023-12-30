import styles from './index.module.scss'

interface ScreenReaderOnlyTextProps {
  readerOnlyText: string
}

export const ScreenReaderOnlyText = ({
  readerOnlyText,
}: ScreenReaderOnlyTextProps) => {
  return (
    <>
      <span className={`${styles.sr_only}`}>{readerOnlyText}</span>
    </>
  )
}

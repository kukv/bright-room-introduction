interface ScreenReaderOnlyTextProps {
  text: string
}

export const ScreenReaderOnlyText = ({
  text,
  ...props
}: ScreenReaderOnlyTextProps) => {
  return (
    <>
      <span className="sr-only">{text}</span>
    </>
  )
}

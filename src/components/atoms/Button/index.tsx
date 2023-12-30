import styles from './index.module.scss'

interface ButtonProps {
  displayName: string
  isDisabled?: boolean
  action: () => void
}

export const Button = ({
  displayName,
  isDisabled = false,
  action,
}: ButtonProps) => {
  const buttonColor = isDisabled
    ? styles.button_disabled_color
    : styles.button_enabled_color

  return (
    <button
      type="submit"
      className={`${styles.button_layout} ${buttonColor} ${styles.button_text}`}
      disabled={isDisabled}
      formAction={action}
    >
      {displayName}
    </button>
  )
}

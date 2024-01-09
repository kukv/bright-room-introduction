import React from 'react'
import styles from './index.module.scss'

interface ButtonProps {
  isDisabled?: boolean
  action: () => void
  children: React.ReactNode
}

export const Button = ({
  isDisabled = false,
  action,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="submit"
      className={`${styles['br-button']} ${
        isDisabled
          ? styles['br-button--disabled']
          : styles['br-button--primary']
      }`}
      disabled={isDisabled}
      formAction={action}
      {...props}
    >
      {children}
    </button>
  )
}

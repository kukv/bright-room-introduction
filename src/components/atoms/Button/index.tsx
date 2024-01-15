import React from 'react'
import styles from './index.module.scss'

interface ButtonProps {
  isDisabled?: boolean
  children: React.ReactNode
}

export const Button = ({
  isDisabled = false,
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
      {...props}
    >
      {children}
    </button>
  )
}

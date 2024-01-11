import type * as CSS from 'csstype'
import styles from './index.module.scss'

interface TextLabelProps {
  labelName: string
  color?: string
  required?: boolean
}

export const TextLabel = ({
  labelName,
  color = '#000000',
  required = false,
}: TextLabelProps) => {
  const style: CSS.Properties = {
    color: color,
  }

  return (
    <label
      htmlFor={labelName}
      style={style}
      className={`${styles['br-text-label']} ${
        required ? styles['br-text-label--required-mark'] : ''
      }`}
    >
      {labelName}
    </label>
  )
}

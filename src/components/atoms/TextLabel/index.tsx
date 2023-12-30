import styles from './index.module.scss'

interface TextLabelProps {
  labelName: string
  required?: boolean
}

export const TextLabel = ({ labelName, required = false }: TextLabelProps) => {
  return (
    <label
      htmlFor={labelName}
      className={`${styles.label_name} ${required ? styles.required_mark : ''}`}
    >
      {labelName}
    </label>
  )
}

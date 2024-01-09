import styles from './index.module.scss'

interface TextFieldProps {
  fieldId: string
  placeholder?: string
  required?: boolean
}

export const TextField = ({
  fieldId,
  placeholder,
  required = false,
}: TextFieldProps) => {
  return (
    <input
      type="text"
      id={fieldId}
      className={styles['br-text-field']}
      placeholder={placeholder}
      required={required}
    />
  )
}

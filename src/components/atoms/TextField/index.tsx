import styles from './index.module.scss'

interface TextFieldProps {
  fieldId: string
  fieldName: string
  placeholder?: string
  required?: boolean
}

export const TextField = ({
  fieldId,
  fieldName,
  placeholder,
  required = false,
}: TextFieldProps) => {
  return (
    <>
      <label htmlFor={fieldName} className={`${styles.text_label}`}>
        {fieldName}
      </label>
      <input
        type="text"
        id={fieldId}
        className={`${styles.text_field}`}
        placeholder={placeholder}
        required={required}
      />
    </>
  )
}

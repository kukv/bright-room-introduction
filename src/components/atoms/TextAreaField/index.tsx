import styles from './index.module.scss'

interface TextAreaFieldProps {
  fieldId: string
  fieldName: string
  required?: boolean
}

export const TextAreaField = ({
  fieldId,
  fieldName,
  required = false,
}: TextAreaFieldProps) => {
  return (
    <>
      <label htmlFor={fieldName} className={`${styles.text_label}`}>
        {fieldName}
      </label>
      <textarea
        id={fieldId}
        rows={4}
        required={required}
        className={`${styles.text_area_field}`}
      />
    </>
  )
}

import styles from './index.module.scss'

interface TextAreaFieldProps {
  fieldId: string
  row?: number
  required?: boolean
}

export const TextAreaField = ({
  fieldId,
  row = 4,
  required = false,
}: TextAreaFieldProps) => {
  return (
    <textarea
      id={fieldId}
      rows={row}
      required={required}
      className={`${styles.text_area_field}`}
    />
  )
}

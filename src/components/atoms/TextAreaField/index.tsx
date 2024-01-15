import { useFormContext } from 'react-hook-form'
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
  const { register } = useFormContext()

  return (
    <textarea
      id={fieldId}
      rows={row}
      required={required}
      className={styles['br-text-area-field']}
      {...register(fieldId, { required })}
    />
  )
}

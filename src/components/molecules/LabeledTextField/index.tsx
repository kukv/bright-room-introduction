import { TextField } from '@/components/atoms/TextField'
import { TextLabel } from '@/components/atoms/TextLabel'

interface LabeledTextFieldProps {
  fieldId: string
  labelName: string
  placeholder?: string
  required?: boolean
}

export const LabeledTextField = ({
  fieldId,
  labelName,
  placeholder = '',
  required = true,
}: LabeledTextFieldProps) => {
  return (
    <>
      <TextLabel labelName={labelName} color="#FFFFFF" required={required} />
      <TextField
        fieldId={fieldId}
        placeholder={placeholder}
        required={required}
      />
    </>
  )
}

import { TextAreaField } from '@/components/atoms/TextAreaField'
import { TextLabel } from '@/components/atoms/TextLabel'

interface LabeledTextAreaProps {
  fieldId: string
  labelName: string
  row?: number
  required?: boolean
}

export const LabeledTextArea = ({
  fieldId,
  labelName,
  row = 4,
  required = true,
}: LabeledTextAreaProps) => {
  return (
    <>
      <TextLabel labelName={labelName} required={required} />
      <TextAreaField fieldId={fieldId} row={row} required={required} />
    </>
  )
}

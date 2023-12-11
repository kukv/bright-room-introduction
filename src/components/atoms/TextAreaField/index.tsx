interface TextAreaFieldProps {
  id: string
  requied?: boolean
}

export const TextAreaField = ({
  id,
  requied = false,
  ...props
}: TextAreaFieldProps) => {
  return (
    <textarea
      id={id}
      rows={4}
      required={requied}
      className="block w-full rounded-lg border p-2.5"
    />
  )
}

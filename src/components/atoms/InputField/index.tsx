interface InputFieldProps {
  id: string
  type: string
  placeholder?: string
  required?: boolean
}

export const InputField = ({
  id,
  type,
  placeholder,
  required = false,
  ...props
}: InputFieldProps) => {
  return (
    <input
      type={type}
      id={id}
      className="block w-full rounded-lg border p-2.5"
      placeholder={placeholder}
      required={required}
    />
  )
}

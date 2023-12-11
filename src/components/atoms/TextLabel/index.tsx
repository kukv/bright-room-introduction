interface TextLabelProps {
  title: string
}

export const TextLabel = ({ title, ...props }: TextLabelProps) => {
  return (
    <label htmlFor={title} className="mb-2 block text-white">
      {title}
    </label>
  )
}

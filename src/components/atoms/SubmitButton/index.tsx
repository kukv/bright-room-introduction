interface SubmitButtonProps {
  name: string
}

export const SubmitButton = ({ name, ...props }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
    >
      {name}
    </button>
  )
}

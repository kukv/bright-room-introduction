const dir = process.env.BACKEND_URL

interface ProfileImageProps {
  className?: string
}

export const ProfileImage = ({ className, ...props }: ProfileImageProps) => {
  return (
    <img
      src={`${dir}/about-profileImage.png`}
      className={`h-40 w-40 rounded-full ${className}`}
      alt="Logo"
    />
  )
}

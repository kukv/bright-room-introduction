import Image from 'next/image'
import AboutProfileImage from 'public/about-profileImage.png'

interface ProfileImageProps {
  className?: string
}

export const ProfileImage = ({ className, ...props }: ProfileImageProps) => {
  return (
    <Image
      src={AboutProfileImage}
      className={`h-40 w-40 rounded-full ${className}`}
      alt="Logo"
    />
  )
}

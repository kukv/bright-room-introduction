import AboutProfileImage from '@@/public/about-profileImage.png'
import Image from 'next/image'
import styles from './index.module.scss'

export const ProfileImage = () => {
  return (
    <Image
      src={AboutProfileImage}
      className={`${styles.profile_image_style}`}
      alt="ProfileImage"
    />
  )
}

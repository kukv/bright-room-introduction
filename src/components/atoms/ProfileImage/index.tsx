import AboutProfileImage from '@@/public/about-profileImage.png'
import Image from 'next/image'
import styles from './index.module.scss'

export const ProfileImage = () => {
  return (
    <Image
      src={AboutProfileImage}
      className={styles['br-profile-image']}
      alt="ProfileImage"
    />
  )
}

import { ContactForm } from '@/components/organisms/ContactForm'
import styles from './index.module.scss'

interface ContactProps {}

export const Contact = ({ ...props }: ContactProps) => {
  return (
    <section id="contact" className={`py-20 lg:py-40 ${styles.ZigZag_3D}`}>
      <div className="mx-4 flex flex-col justify-center lg:mx-0 lg:items-center lg:justify-normal">
        <div className="container px-16 pb-16 lg:px-36">
          <h1 className="pb-4 text-3xl font-bold text-white">Contact Us</h1>
          <p className="text-white">
            Feel free to contact me for any work or suggestions below.
          </p>
        </div>

        <form className="container px-16 lg:px-36">
          <ContactForm />
        </form>
      </div>
    </section>
  )
}

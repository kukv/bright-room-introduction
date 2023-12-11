import { InputField } from '@/components/atoms/InputField'
import { SubmitButton } from '@/components/atoms/SubmitButton'
import { TextAreaField } from '@/components/atoms/TextAreaField'
import { TextLabel } from '@/components/atoms/TextLabel'

interface ContactFormProps {}

export const ContactForm = ({ ...props }: ContactFormProps) => {
  return (
    <>
      <div className="mb-8">
        <TextLabel title="name" />
        <InputField
          id="name"
          type="text"
          placeholder="Full Name"
          required={true}
        />
      </div>
      <div className="mb-8">
        <TextLabel title="email" />
        <InputField
          id="email"
          type="text"
          placeholder="example@example.com"
          required={true}
        />
      </div>
      <div className="mb-8">
        <TextLabel title="message" />
        <TextAreaField id="message" requied={true} />
      </div>
      <div className="mb-8">
        <SubmitButton name="Send" />
      </div>
    </>
  )
}

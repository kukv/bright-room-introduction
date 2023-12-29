import { Button } from 'src/components/atoms/Button'
import { TextAreaField } from '@/components/atoms/TextAreaField'
import { TextField } from '@/components/atoms/TextField'

interface ContactFormProps {}

export const ContactForm = ({ ...props }: ContactFormProps) => {
  return (
    <>
      <div className="mb-8">
        <TextField
          fieldId="name"
          fieldName="name"
          placeholder="Full Name"
          required={true}
        />
      </div>
      <div className="mb-8">
        <TextField
          fieldId="email"
          fieldName="email"
          placeholder="example@example.com"
          required={true}
        />
      </div>
      <div className="mb-8">
        <TextAreaField fieldId="message" fieldName="message" required={true} />
      </div>
      <div className="mb-8">
        <Button displayName="Send" isDisabled={false} action={() => {}} />
      </div>
    </>
  )
}

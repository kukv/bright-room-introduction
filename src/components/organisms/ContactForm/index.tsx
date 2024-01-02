import { Button } from '@/components/atoms/Button'
import { LabeledTextArea } from '@/components/molecules/LabeledTextArea'
import { LabeledTextField } from '@/components/molecules/LabeledTextField'

export const ContactForm = () => {
  return (
    <form>
      <div className="mb-8">
        <LabeledTextField
          fieldId="name"
          labelName="name"
          placeholder="Full Name"
          required={true}
        />
      </div>
      <div className="mb-8">
        <LabeledTextField
          fieldId="email"
          labelName="email"
          placeholder="example@example.com"
          required={true}
        />
      </div>
      <div className="mb-8">
        <LabeledTextArea
          fieldId="message"
          labelName="message"
          row={4}
          required={true}
        />
      </div>
      <div className="mb-8">
        <Button displayName="Send" isDisabled={false} action={() => {}} />
      </div>
    </form>
  )
}

import { Button } from '@/components/atoms/Button'
import { LabeledTextArea } from '@/components/molecules/LabeledTextArea'
import { LabeledTextField } from '@/components/molecules/LabeledTextField'
import { FormProvider, useForm } from 'react-hook-form'

export const ContactForm = () => {
  const methods = useForm()
  const onSubmit = (data: any) => console.log(data)

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
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
          <Button isDisabled={false}>Send</Button>
        </div>
      </form>
    </FormProvider>
  )
}

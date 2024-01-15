import { Meta, StoryObj } from '@storybook/react'
import { FormProvider, useForm } from 'react-hook-form'
import { TextAreaField } from '.'

const meta = {
  title: 'components/atoms/TextAreaField',
  component: TextAreaField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextAreaField>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {
  args: {
    fieldId: 'example',
    row: 4,
    required: true,
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const methods = useForm()
    const onSubmit = (data: any) => console.log(data)
    return (
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <TextAreaField {...args} />
        </form>
      </FormProvider>
    )
  },
}

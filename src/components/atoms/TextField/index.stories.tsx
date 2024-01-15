import { Meta, StoryObj } from '@storybook/react'
import { FormProvider, useForm } from 'react-hook-form'
import { TextField } from '.'

const meta = {
  title: 'components/atoms/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {
  args: {
    fieldId: 'example',
    placeholder: 'test',
    required: true,
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const methods = useForm()
    const onSubmit = (data: any) => console.log(data)
    return (
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <TextField {...args} />
        </form>
      </FormProvider>
    )
  },
}

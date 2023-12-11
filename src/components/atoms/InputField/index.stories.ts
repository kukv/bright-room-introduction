import { Meta, StoryObj } from '@storybook/react'
import { InputField } from '.'

const meta = {
  title: 'atoms/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof InputField>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {
  args: {
    id: 'example',
    type: 'text',
    placeholder: 'test',
    required: true,
  },
}

import { Meta, StoryObj } from '@storybook/react'
import { TextAreaField } from '.'

const meta = {
  title: 'atoms/TextAreaField',
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
}

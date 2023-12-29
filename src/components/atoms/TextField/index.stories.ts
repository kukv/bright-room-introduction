import { Meta, StoryObj } from '@storybook/react'
import { TextField } from '.'

const meta = {
  title: 'atoms/TextField',
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
    fieldName: 'example',
    placeholder: 'test',
    required: true,
  },
}

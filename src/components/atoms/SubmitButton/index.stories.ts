import { Meta, StoryObj } from '@storybook/react'
import { SubmitButton } from '.'

const meta = {
  title: 'atoms/SubmitButton',
  component: SubmitButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SubmitButton>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {
  args: {
    name: 'submit',
  },
}

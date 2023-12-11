import { Meta, StoryObj } from '@storybook/react'
import { CloseButton } from '@/components/molecules/CloseButton/index'

const meta = {
  title: 'molecules/CloseButton',
  component: CloseButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CloseButton>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {
  args: {
    text: 'Bright Room',
    action: () => {},
  },
}

import { Meta, StoryObj } from '@storybook/react'
import { HamburgerButton } from '@/components/molecules/HamburgerButton/index'

const meta = {
  title: 'molecules/HamburgerButton',
  component: HamburgerButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof HamburgerButton>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {
  args: {
    text: 'Bright Room',
    action: () => {},
  },
}

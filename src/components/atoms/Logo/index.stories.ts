import { Logo } from '@/components/atoms/Logo/index'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'atoms/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {
  args: {
    logoSize: 'small',
  },
}

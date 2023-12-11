import { Meta, StoryObj } from '@storybook/react'
import { Logo } from '@/components/images/Logo/index'

const meta = {
  title: 'images/Logo',
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
    size: 'small',
  },
}

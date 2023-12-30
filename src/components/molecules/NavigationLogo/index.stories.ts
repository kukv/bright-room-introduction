import { NavigationLogo } from '@/components/molecules/NavigationLogo/index'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'molecules/NavigationLogo',
  component: NavigationLogo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof NavigationLogo>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {}

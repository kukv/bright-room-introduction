import { Meta, StoryObj } from '@storybook/react'
import { NavigationLogoLogo } from '@/components/molecules/NavigationLogo/index'

const meta = {
  title: 'molecules/NavigationLogo',
  component: NavigationLogoLogo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof NavigationLogoLogo>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {
  args: {
    text: 'Bright Room',
    url: '#',
    size: 'small',
  },
}

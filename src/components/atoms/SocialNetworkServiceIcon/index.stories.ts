import { Meta, StoryObj } from '@storybook/react'
import { SocialNetworkServiceIcon } from './index'

const meta = {
  title: 'atoms/SocialNetworkServiceIcon',
  component: SocialNetworkServiceIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SocialNetworkServiceIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {
  args: {
    iconType: 'x',
    iconColor: '#000000',
    externalLink: 'https://twitter.com/koki_nonaka',
  },
}

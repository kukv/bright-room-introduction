import { Meta, StoryObj } from '@storybook/react'
import { SocialNetworkServiceIcon } from './index'

const meta = {
  title: 'components/atoms/SocialNetworkServiceIcon',
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
    type: 'x',
    color: '#000000',
    size: '3x',
    link: 'https://twitter.com/koki_nonaka',
  },
}

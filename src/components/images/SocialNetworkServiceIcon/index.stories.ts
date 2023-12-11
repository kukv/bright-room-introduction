import { Meta, StoryObj } from '@storybook/react'
import { SocialNetworkServiceIcon } from '.'

const meta = {
  title: 'images/SocialNetworkServiceIcon',
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
    icon: 'x',
    color: '#000000',
    link: 'https://twitter.com/koki_nonaka',
  },
}

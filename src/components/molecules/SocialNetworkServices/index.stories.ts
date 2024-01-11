import { Meta, StoryObj } from '@storybook/react'
import { SocialNetworkServices } from '.'

const meta = {
  title: 'components/molecules/SocialNetworkServices',
  component: SocialNetworkServices,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SocialNetworkServices>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {
  args: {
    iconColor: '#000000',
  },
}

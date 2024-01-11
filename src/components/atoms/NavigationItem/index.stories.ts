import { Meta, StoryObj } from '@storybook/react'
import { NavigationItem } from '.'

const meta = {
  title: 'components/atoms/NavigationItem',
  component: NavigationItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof NavigationItem>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {
  args: {
    url: '#',
    mobile: false,
    children: 'Home',
  },
}

import { Meta, StoryObj } from '@storybook/react'
import { XMarkIcon } from '.'

const meta = {
  title: 'images/XMarkIcon',
  component: XMarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof XMarkIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {
  args: {
    className: 'h-6 w-6',
    ariaHidden: true,
  },
}

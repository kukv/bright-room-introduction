import { Meta, StoryObj } from '@storybook/react'
import { Bar3Icon } from '.'

const meta = {
  title: 'images/Bar3Icon',
  component: Bar3Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Bar3Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {
  args: {
    className: 'h-6 w-6',
    ariaHidden: true,
  },
}

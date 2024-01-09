import { Meta, StoryObj } from '@storybook/react'
import { CloseIcon } from '.'

const meta = {
  title: 'components/atoms/CloseIcon',
  component: CloseIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CloseIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {
  args: {
    className: 'h-6 w-6',
    ariaHidden: true,
  },
}

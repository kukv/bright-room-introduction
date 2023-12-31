import { Meta, StoryObj } from '@storybook/react'
import { Navigation } from '.'

const meta = {
  title: 'organisms/Navigation',
  component: Navigation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Navigation>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {}

import { Meta, StoryObj } from '@storybook/react'
import { Home } from '.'

const meta = {
  title: 'components/section/Home',
  component: Home,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Home>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {}

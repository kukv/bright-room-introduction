import { Meta, StoryObj } from '@storybook/react'
import { About } from '.'

const meta = {
  title: 'components/section/About',
  component: About,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof About>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {}

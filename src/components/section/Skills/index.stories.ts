import { Meta, StoryObj } from '@storybook/react'
import { Skills } from '.'

const meta = {
  title: 'components/section/Skills',
  component: Skills,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Skills>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {}

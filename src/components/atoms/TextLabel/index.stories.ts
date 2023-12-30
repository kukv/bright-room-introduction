import { Meta, StoryObj } from '@storybook/react'
import { TextLabel } from '.'

const meta = {
  title: 'atoms/TextLabel',
  component: TextLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextLabel>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {
  args: {
    labelName: 'example',
    required: true,
  },
}

import { Meta, StoryObj } from '@storybook/react'
import { LabeledTextArea } from './index'

const meta = {
  title: 'molecules/LabeledTextArea',
  component: LabeledTextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LabeledTextArea>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {
  args: {
    fieldId: 'examples',
    labelName: 'examples',
    row: 4,
    required: true,
  },
}

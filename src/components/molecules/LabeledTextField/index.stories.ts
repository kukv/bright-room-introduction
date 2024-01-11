import { Meta, StoryObj } from '@storybook/react'
import { LabeledTextField } from './index'

const meta = {
  title: 'components/molecules/LabeledTextField',
  component: LabeledTextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LabeledTextField>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {
  args: {
    fieldId: 'examples',
    labelName: 'examples',
    placeholder: 'examples',
    required: true,
  },
}

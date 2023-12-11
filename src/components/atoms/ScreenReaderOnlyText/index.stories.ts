import { Meta, StoryObj } from '@storybook/react'
import { ScreenReaderOnlyText } from '.'

const meta = {
  title: 'atoms/ScreenReaderOnlyText',
  component: ScreenReaderOnlyText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ScreenReaderOnlyText>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {
  args: {
    text: 'Bright Room',
  },
}

import { Meta, StoryObj } from '@storybook/react'
import { ScreenReaderOnlyText } from '.'

const meta = {
  title: 'components/atoms/ScreenReaderOnlyText',
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
    readerOnlyText: 'Bright Room',
  },
}

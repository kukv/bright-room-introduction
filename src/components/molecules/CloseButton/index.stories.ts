import { CloseButton } from '@/components/molecules/CloseButton/index'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'components/molecules/CloseButton',
  component: CloseButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CloseButton>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {
  args: {
    readerOnlyText: 'Bright Room',
    action: () => {},
  },
}

import { CollapsedMenuButton } from '@/components/molecules/CollapsedMenuButton/index'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'molecules/CollapsedMenuButton',
  component: CollapsedMenuButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CollapsedMenuButton>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {
  args: {
    readerOnlyText: 'Bright Room',
    action: () => {},
  },
}

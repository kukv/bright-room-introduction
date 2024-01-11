import { Meta, StoryObj } from '@storybook/react'
import { SideMenu } from '.'

const meta = {
  title: 'components/organisms/SideMenu',
  component: SideMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SideMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {
  args: {
    isOpen: true,
    closingAction: () => 1,
  },
}

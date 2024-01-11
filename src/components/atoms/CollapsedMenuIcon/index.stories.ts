import { Meta, StoryObj } from '@storybook/react'
import { CollapsedMenuIcon } from './index'

const meta = {
  title: 'components/atoms/CollapsedMenuIcon',
  component: CollapsedMenuIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CollapsedMenuIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {}

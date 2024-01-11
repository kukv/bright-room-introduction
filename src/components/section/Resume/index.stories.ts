import { Meta, StoryObj } from '@storybook/react'
import { Resume } from '.'

const meta = {
  title: 'components/section/Resume',
  component: Resume,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Resume>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {}

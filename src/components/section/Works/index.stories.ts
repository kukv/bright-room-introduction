import { Meta, StoryObj } from '@storybook/react'
import { Works } from '.'

const meta = {
  title: 'components/section/Works',
  component: Works,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Works>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {}

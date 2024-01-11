import { Meta, StoryObj } from '@storybook/react'
import { Contact } from '.'

const meta = {
  title: 'components/section/Contact',
  component: Contact,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Contact>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {}

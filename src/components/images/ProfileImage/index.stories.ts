import { Meta, StoryObj } from '@storybook/react'
import { ProfileImage } from '.'

const meta = {
  title: 'images/ProfileImage',
  component: ProfileImage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ProfileImage>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {}

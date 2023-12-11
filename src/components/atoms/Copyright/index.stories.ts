import { Meta, StoryObj } from '@storybook/react'
import { Copyright } from '.'

const meta = {
  title: 'atoms/Copyright',
  component: Copyright,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Copyright>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {
  args: {
    year: 2023,
    name: 'koki nonaka',
    link: 'https://github.com/kukv',
  },
}

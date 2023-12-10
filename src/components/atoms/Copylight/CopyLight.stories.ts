import { Meta, StoryObj } from '@storybook/react'
import { CopyLight } from '@/components/atoms/Copylight/CopyLight'

const meta = {
  title: 'atoms/CopyLight',
  component: CopyLight,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CopyLight>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {
  args: {
    year: 2023,
    name: 'koki nonaka',
    link: 'https://github.com/kukv',
  },
}

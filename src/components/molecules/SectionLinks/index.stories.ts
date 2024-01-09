import { Meta, StoryObj } from '@storybook/react'
import { SectionLink } from './index'

const meta = {
  title: 'components/molecules/SectionLink',
  component: SectionLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SectionLink>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {
  args: {
    isMobile: false,
  },
}

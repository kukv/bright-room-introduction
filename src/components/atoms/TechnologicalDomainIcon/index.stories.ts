import { Meta, StoryObj } from '@storybook/react'
import { TechnologicalDomainIcon } from './index'

const meta = {
  title: 'components/atoms/TechnologicalDomainIcon',
  component: TechnologicalDomainIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TechnologicalDomainIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {
  args: {
    type: 'frontend',
  },
}

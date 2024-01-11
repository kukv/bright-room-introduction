import { Meta, StoryObj } from '@storybook/react'
import { TechnologicalDomain } from './index'

const meta = {
  title: 'components/molecules/TechnologicalDomain',
  component: TechnologicalDomain,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TechnologicalDomain>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {
  args: {
    iconType: 'frontend',
    domainName: 'Frontend',
    stackData:
      '✓ Typescript/Javascript\n✓ Node.js\n✓ React\n✓ Next.js\n✓ HTML/CSS/SASS',
  },
}

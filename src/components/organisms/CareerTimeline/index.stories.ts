import { Meta, StoryObj } from '@storybook/react'
import { CareerTimeline } from '.'

const meta = {
  title: 'components/organisms/CareerTimeline',
  component: CareerTimeline,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CareerTimeline>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {
  args: {
    careers: [
      {
        year: 2024,
        items: [
          {
            month: 'Mar',
            day: 1,
            title: 'Joined ??? Inc.',
            description: '内容',
          },
        ],
      },
      {
        year: 2022,
        items: [
          {
            month: 'May',
            day: 2,
            title: 'Joined ??? Inc.',
            description: '内容',
          },
        ],
      },
      {
        year: 2020,
        items: [
          {
            month: 'Apr',
            day: 1,
            title: 'Joined ??? Inc.',
            description: '内容',
          },
          {
            month: 'Mar',
            day: 19,
            title: 'Graduated from Chiba College of Information and Accounting',
            description: '内容',
          },
        ],
      },
    ],
  },
}

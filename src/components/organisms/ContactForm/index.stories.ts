import { Meta, StoryObj } from '@storybook/react'
import { ContactForm } from '.'

const meta = {
  title: 'organisms/ContactForm',
  component: ContactForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ContactForm>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {}

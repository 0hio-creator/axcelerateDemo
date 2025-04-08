import React from 'react'
import { View } from 'react-native'
import type { Meta, StoryObj } from '@storybook/react'
import { ContactSection } from './ContactSection'
import { Colors } from '../../../../assets/colors/colors'

const meta = {
  title: 'molecules/ContactSection',
  component: ContactSection,
  parameters: {
    notes: `
     #Contact Section
Combines the rows of contacts with a section header. Component is stateful to track if it is expanded or contracted
    `,
  },
  args: {
    contacts: [
      {
        name: 'jane doe',
        email: 'jane@email',
        status: 'attendend',
        profilePicUrl: require(`../../../../assets/images/profilePics/pic3.png`),
      },
      {
        name: 'john doe',
        status: 'attendend',
      },
    ],
    title: 'Title',
  },
  decorators: [
    (Story) => (
      <View style={{ paddingVertical: 16, backgroundColor: Colors.bgGrey }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ContactSection>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {}

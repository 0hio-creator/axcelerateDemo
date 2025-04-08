import React from 'react'
import { View } from 'react-native'
import type { Meta, StoryObj } from '@storybook/react'
import { ContactListItem } from './ContactListItem'
import { Colors } from '../../../../assets/colors/colors'

const meta = {
  title: 'molecules/ContactListItem',
  component: ContactListItem,
  parameters: {
    notes: `
     #Contact List item
Touchable row that presents available contact information. Imagine extending this to open a a user detail screen
    `,
  },
  args: {
    name: 'Jane Doe',
    status: 'attendend',
  },
  decorators: [
    (Story) => (
      <View
        style={{
          paddingVertical: 16,
          alignItems: 'flex-start',
          backgroundColor: Colors.bgGrey,
        }}
      >
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ContactListItem>

export default meta

type Story = StoryObj<typeof meta>

export const JustName: Story = {}

export const NameAndEmailAndProfilePic: Story = {
  args: {
    name: 'Jane Doe',
    email: 'jane@email.com',
    status: 'attendend',
    profilePicUrl: require(`../../../../assets/images/profilePics/pic3.png`),
  },
}

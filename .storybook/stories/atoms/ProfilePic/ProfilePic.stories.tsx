import React from 'react'
import { View } from 'react-native'
import type { Meta, StoryObj } from '@storybook/react'
import { ProfilePic } from './ProfilePic'
import { Colors } from '../../../../assets/colors/colors'

const meta = {
  title: 'atoms/ProfilePic',
  component: ProfilePic,
  parameters: {
    notes: `
     # Profile Picture
Will show a supplied React Native image or will show the default supplied image
    `,
  },
  decorators: [
    (Story) => (
      <View
        style={{
          marginTop: 16,
          alignItems: 'center',
          backgroundColor: Colors.white,
        }}
      >
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ProfilePic>

export default meta

type Story = StoryObj<typeof meta>

export const defaultImage: Story = {}
export const specifiedImage: Story = {
  args: {
    profilePicUrl: require(`../../../../assets/images/profilePics/pic1.png`),
  },
}

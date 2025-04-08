import React from 'react'
import { View } from 'react-native'
import type { Meta, StoryObj } from '@storybook/react'
import { StyledText } from './StyledText'
import { Colors } from '../../../../assets/colors/colors'

const meta = {
  title: 'atoms/StyledText',
  component: StyledText,
  args: {
    textStyle: 'normal',
    children: 'Hello world',
  },
  parameters: {
    notes: `
     # Stylized Text
Beginnings of a styleized component. At the moment only variation was text color but could have thing like text size and weight
    `,
  },
  decorators: [
    (Story) => (
      <View
        style={{
          padding: 16,
          backgroundColor: Colors.white,
        }}
      >
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof StyledText>

export default meta

type Story = StoryObj<typeof meta>

export const normalText: Story = {}
export const lightText: Story = {
  args: {
    textStyle: 'light',
    children: 'Hello world',
  },
}

import React from 'react'
import { View } from 'react-native'
import type { Meta, StoryObj } from '@storybook/react'
import { SearchBar } from './SearchBar'
import { Colors } from '../../../../assets/colors/colors'

const meta = {
  title: 'atoms/SearchBar',
  component: SearchBar,
  parameters: {
    notes: `
     # Search Bar
Stylized textinput component. Note the state is external to the component
    `,
  },
  args: {
    searchTerm: '',
    setSearchTerm: () => {},
  },
  decorators: [
    (Story) => (
      <View style={{ paddingVertical: 16, backgroundColor: Colors.bgGrey }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof SearchBar>

export default meta

type Story = StoryObj<typeof meta>

export const NoSearchTerm: Story = {}
export const SearchTerm: Story = {
  args: {
    searchTerm: 'hello world',
    setSearchTerm: () => {},
  },
}

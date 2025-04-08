import React from 'react'
import { View } from 'react-native'
import type { Meta, StoryObj } from '@storybook/react'
import { ContactListSearch } from './ContactListSearch'
import { Colors } from '../../../../assets/colors/colors'
import { ContactListItemProps } from '../../molecules/ContactListItem/ContactListItem'

const MOCK_CONTACT_LIST = [
  {
    name: 'jane doe',
    email: 'jane@email',
    status: 'attendend',
    profilePicUrl: require(`../../../../assets/images/profilePics/pic1.png`),
  },
  {
    name: 'val doe',
    status: 'attendend',
    profilePicUrl: require(`../../../../assets/images/profilePics/pic2.png`),
  },
  {
    name: 'james guy',
    email: 'james@email',
    status: 'attendend',
  },
  {
    name: 'john doe',
    status: 'absent',
  },
  {
    name: 'vic man',
    email: 'vic@email',
    status: 'absent',
    profilePicUrl: require(`../../../../assets/images/profilePics/pic3.png`),
  },
  {
    name: 'voger vogerson',
    email: 'voger@email',
    status: 'absent',
  },
] as ContactListItemProps[]

const meta = {
  title: 'organisms/ContactListSearch',
  component: ContactListSearch,
  parameters: {
    notes: `
     #Contact List Search
Combination of all components. Can be used with multiple states & contacts can be filtereed by searching
    `,
  },
  args: {
    contacts: MOCK_CONTACT_LIST,
    statuses: ['absent', 'attendend'],
  },
  decorators: [
    (Story) => (
      <View style={{ paddingVertical: 16, backgroundColor: Colors.bgGrey }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ContactListSearch>

export default meta

type Story = StoryObj<typeof meta>

export const TwoStatusSections: Story = {}

export const OneStatusSection: Story = {
  args: {
    contacts: MOCK_CONTACT_LIST,
    statuses: ['absent'],
  },
}

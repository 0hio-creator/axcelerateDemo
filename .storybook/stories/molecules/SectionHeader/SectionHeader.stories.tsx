import React from 'react'
import { View } from 'react-native'
import type { Meta, StoryObj } from '@storybook/react'
import { SectionHeader } from './SectionHeader'
import { Colors } from '../../../../assets/colors/colors'

const meta = {
  title: 'molecules/SectionHeader',
  component: SectionHeader,
  parameters: {
    notes: `
     #Section Header
Touchable row that displays a title. The arrow indicator change facing depening if the section is expanded/contracted
    `,
  },
  args: {
    title: 'Active Title',
    active: true,
    setActive: () => {},
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
} satisfies Meta<typeof SectionHeader>

export default meta

type Story = StoryObj<typeof meta>

export const ActiveSectionHeader: Story = {}
export const InActiveSectionHeader: Story = {
  args: {
    title: 'Inactive Title',
    active: false,
    setActive: () => {},
  },
}

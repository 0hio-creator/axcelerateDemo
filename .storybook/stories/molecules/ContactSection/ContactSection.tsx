import React, { useState } from 'react'

import { SectionHeader } from '../SectionHeader/SectionHeader'
import { View } from 'react-native'
import {
  ContactListItem,
  ContactListItemProps,
} from '../ContactListItem/ContactListItem'

type props = {
  contacts: ContactListItemProps[]
  title: string
}

/** Contact section title should relfect the status of the contacts, manages the expanded/contracted state of the contacts */
export const ContactSection = ({ title, contacts }: props) => {
  const [active, setActive] = useState(true)
  return (
    <>
      <SectionHeader title={title} active={active} setActive={setActive} />
      {active &&
        contacts.map((contact, index) => (
          <View key={`title${index}`}>
            <ContactListItem
              name={contact.name}
              email={contact.email}
              status={contact.status}
              profilePicUrl={contact.profilePicUrl}
            />
          </View>
        ))}
    </>
  )
}

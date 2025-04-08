import React, { useState } from 'react'
import { filterContacts } from './utils'
import {
  ContactListItemProps,
  status,
} from '../../molecules/ContactListItem/ContactListItem'
import { SearchBar } from '../../atoms/SearchBar/SearchBar'
import { ContactSection } from '../../molecules/ContactSection/ContactSection'

type props = {
  contacts: ContactListItemProps[]
  statuses: status[]
}
/** Contact List Search
 * arranges contacts in sections based on statuses
 * contacts can be filtered in the search bar
 */
export const ContactListSearch = ({ statuses, contacts }: props) => {
  const [searchTerm, setSearchTerm] = useState<string>('')

  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {statuses.map((status) => (
        <ContactSection
          key={`contact${status}`}
          contacts={filterContacts(contacts, status, searchTerm)}
          title={status.toUpperCase()}
        />
      ))}
    </>
  )
}

import {
  ContactListItemProps,
  status,
} from '../../molecules/ContactListItem/ContactListItem'

/** Return a filtered array of contacts based on a given status and searchterm */
export const filterContacts = (
  contacts: ContactListItemProps[],
  attendance: status,
  searchTerm: string
) => {
  return contacts.filter(
    (contact) =>
      contact.status === attendance &&
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
}

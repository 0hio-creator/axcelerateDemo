import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ImageSourcePropType,
} from 'react-native'
import { Colors } from '../../../../assets/colors/colors'
import { StyledText } from '../../atoms/StyledText/StyledText'
import { ProfilePic } from '../../atoms/ProfilePic/ProfilePic'

export type status = 'attendend' | 'absent'
export type ContactListItemProps = {
  name: string
  email?: string
  profilePicUrl?: ImageSourcePropType
  status: status
}

/** Row of contact information  */
export const ContactListItem = ({
  name,
  email,
  profilePicUrl,
}: ContactListItemProps) => {
  /** PLaceholder action for pressing a contact. Imagine could navigate to a user detail page*/
  const onSelectContact = () => {
    Alert.alert(`You have selected the contact information of ${name}`)
  }

  return (
    <TouchableOpacity style={styles.row} onPress={onSelectContact}>
      <ProfilePic profilePicUrl={profilePicUrl} />
      <View style={styles.textContainer}>
        <StyledText>{name}</StyledText>
        {email && <StyledText textStyle="light">{email}</StyledText>}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  row: {
    padding: 8,
    backgroundColor: Colors.white,
    width: '100%',
    flexDirection: 'row',
  },
  textContainer: {
    paddingLeft: 18,
    justifyContent: 'center',
  },
  profilePic: {
    width: 36,
    height: 36,
  },
})

import React from 'react'
import { Image, ImageSourcePropType, StyleSheet } from 'react-native'

type Props = {
  profilePicUrl?: ImageSourcePropType
}

/** The profile pic, this is the most placeholder componenet as would assume the profile pics
 * would be networked images and would take a bit to setup the mocking of the network
 * so instead am supplying a statically refered to image if supplied or a default image
 */
export const ProfilePic = ({ profilePicUrl }: Props) => {
  return (
    <Image
      style={styles.profilePic}
      source={
        profilePicUrl
          ? profilePicUrl
          : require(`../../../../assets/images/placeHolderProfile.png`)
      }
    />
  )
}

const styles = StyleSheet.create({
  profilePic: {
    width: 36,
    height: 36,
  },
})

import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Colors } from '../../../../assets/colors/colors'
import { StyledText } from '../../atoms/StyledText/StyledText'

export type SectionHeaderProps = {
  title: string
  active: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}

/** Section Header row, clickable to hide items */
export const SectionHeader = ({
  title,
  active,
  setActive,
}: SectionHeaderProps) => {
  const { styles } = useStyles(active)

  /** change the expanded/contracted state */
  const onPress = () => {
    setActive(!active)
  }
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <View style={styles.textContainer}>
        <StyledText textStyle="light">{title}</StyledText>
      </View>
      <Image
        style={styles.chevron}
        source={require('../../../../assets/images/right.png')}
      />
    </TouchableOpacity>
  )
}

const useStyles = (active: boolean) => {
  const styles = StyleSheet.create({
    row: {
      padding: 8,
      backgroundColor: Colors.white,
      width: '100%',
      flexDirection: 'row',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: Colors.borderMedium,
    },
    textContainer: {
      flex: 1,
      paddingLeft: 8,
    },
    chevron: {
      width: 20,
      height: 20,
      transform: [{ rotate: active ? '0deg' : '90deg' }],
    },
  })

  return { styles }
}

import React from 'react'
import { Image, StyleSheet, TextInput, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

type props = {
  searchTerm: string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

export const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const onChangeText = (text: string) => {
    setSearchTerm(text)
  }
  return (
    <View style={styles.searchBarRow}>
      <Image
        style={styles.icon}
        source={require('../../../../assets/images/search.png')}
      />
      <TextInput
        placeholder="Search"
        placeholderTextColor={Colors.textLight}
        onChangeText={(text) => onChangeText(text)}
        value={searchTerm}
        style={styles.textInput}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchBarRow: {
    padding: 16,
    backgroundColor: Colors.white,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 4,
    color: Colors.text,
  },
})

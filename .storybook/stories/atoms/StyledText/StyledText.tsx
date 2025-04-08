import { StyleSheet, Text, TextProps } from 'react-native'
import { Colors } from '../../../../assets/colors/colors'
import React from 'react'

type textStyleType = 'light' | 'normal'
type Props = {
  textStyle?: textStyleType
} & TextProps

/** styled text component to grow with a design system */
export const StyledText = (props: Props) => {
  const { ...rest } = props
  const { styles } = useStyles(props.textStyle || 'normal')

  return <Text style={{ ...styles.defaultTextStyles }} {...rest} />
}

const useStyles = (textStyle: textStyleType) => {
  const styles = StyleSheet.create({
    defaultTextStyles: {
      fontSize: 14,
      lineHeight: 20,
      color: textStyle == 'light' ? Colors.textLight : Colors.text,
    },
  })

  return { styles }
}

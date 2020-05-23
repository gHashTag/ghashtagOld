// @flow
import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import type { TextStyleProp, ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { useTheme } from '@react-navigation/native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  h4: {
    fontWeight: 'bold'
  }
})

type H4T = {
  title: string,
  textStyle: TextStyleProp,
  viewStyle: ViewStyleProp
}

const H4 = memo<H4T>(({ title, viewStyle, textStyle }) => {
  const { container, h4 } = styles
  const {
    h4: { fontSize, fontFamily },
    colors: { text2 }
  } = useTheme()
  return (
    <View style={[container, viewStyle]}>
      <Text style={[h4, textStyle, { color: text2, fontSize, fontFamily }]}>{title}</Text>
    </View>
  )
})

export { H4 }

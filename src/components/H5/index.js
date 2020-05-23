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
  h5: {
    fontWeight: 'bold'
  }
})

type H5T = {
  title: string,
  textStyle: TextStyleProp,
  viewStyle: ViewStyleProp
}

const H5 = memo<H5T>(({ title, viewStyle, textStyle }) => {
  const { container, h5 } = styles
  const {
    h5: { fontSize, fontFamily },
    colors: { text3 }
  } = useTheme()
  return (
    <View style={[container, viewStyle]}>
      <Text style={[h5, textStyle, { color: text3, fontFamily, fontSize }]}>{title}</Text>
    </View>
  )
})

export { H5 }

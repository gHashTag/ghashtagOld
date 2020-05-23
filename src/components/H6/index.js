// @flow
import React, { memo } from 'react'
import { Platform, StyleSheet, Text } from 'react-native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { useTheme } from '@react-navigation/native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  h6: {
    fontFamily: Platform.OS === 'ios' ? 'KLMN-Flash-Pix' : 'KLMN_Flash_Pix',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    fontSize: 14
  }
})

type H6T = {
  title: string,
  textStyle: TextStyleProp
}

const H6 = memo<H6T>(({ title, textStyle }) => {
  const { h6 } = styles
  const {
    colors: { secondary, text }
  } = useTheme()

  return <Text style={[h6, textStyle, { color: text, textShadowColor: secondary }]}>{title}</Text>
})

export { H6 }

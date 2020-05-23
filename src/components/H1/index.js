// @flow
import React, { memo } from 'react'
import { Platform, StyleSheet, Text } from 'react-native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { useTheme } from '@react-navigation/native'
import { W } from '../../constants'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  h1: {
    width: W - 60,
    textAlign: 'center',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    ...ifIphoneX(
      {
        fontSize: Platform.OS === 'ios' ? 20 : 23
      },
      {
        fontSize: Platform.OS === 'ios' ? 20 : 23
      }
    )
  }
})

type H1T = {
  title: string,
  textStyle: TextStyleProp
}

const H1 = memo<H1T>(({ title, textStyle }) => {
  const { h1 } = styles
  const {
    h1: { fontFamily, fontSize },
    colors: { secondary, text }
  } = useTheme()
  return <Text style={[h1, textStyle, { color: text, textShadowColor: secondary, fontFamily, fontSize }]}>{title}</Text>
})

export { H1 }

// @flow
import React, { memo } from 'react'
import { Platform, StyleSheet, Text } from 'react-native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { useTheme } from '@react-navigation/native'
import { W } from '../../constants'

const styles = StyleSheet.create({
  h3: {
    width: W - 90,
    textAlign: 'center',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    ...ifIphoneX(
      {
        fontSize: Platform.OS === 'ios' ? 19 : 17
      },
      {
        fontSize: Platform.OS === 'ios' ? 14 : 17
      }
    )
  }
})

type H3T = {
  title: string,
  textStyle: TextStyleProp
}

const H3 = memo<H3T>(({ title, textStyle }) => {
  const { h3 } = styles
  const {
    h3: { fontSize, fontFamily },
    colors: { secondary, text }
  } = useTheme()
  return <Text style={[h3, textStyle, { color: text, textShadowColor: secondary, fontFamily, fontSize }]}>{title}</Text>
})

export { H3 }

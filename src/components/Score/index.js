// @flow
import React, { memo } from 'react'
import { Platform, StyleSheet, Text } from 'react-native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { useTheme } from '@react-navigation/native'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  h1: {
    fontFamily: Platform.OS === 'ios' ? 'KLMN-Flash-Pix' : 'KLMN_Flash_Pix',
    fontSize: Platform.OS === 'ios' ? 30 : 30,
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 1
  }
})

type ScoreT = {
  title: string,
  textStyle: TextStyleProp
}

const Score = memo<ScoreT>(({ title, textStyle }) => {
  const { h1 } = styles
  const {
    colors: { secondary, text }
  } = useTheme()
  return <Text style={[h1, textStyle, { color: text, textShadowColor: secondary }]}>{title}</Text>
})

export { Score }

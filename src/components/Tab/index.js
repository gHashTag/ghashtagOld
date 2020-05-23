// @flow
import React, { memo } from 'react'
import { StyleSheet, Image } from 'react-native'
import type { ImageStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { ICONS } from './images'

const styles = StyleSheet.create({
  img: {
    ...ifIphoneX(
      {
        width: 40,
        height: 40
      },
      {
        width: 35,
        height: 35
      }
    )
  }
})

type TabT = {
  title: string,
  imageStyle: ImageStyleProp
}

const Tab = memo<TabT>(({ title, imageStyle }) => {
  const { img } = styles

  const source = () => ICONS.filter(x => x.title === title)[0].path

  return <Image source={source()} style={[img, imageStyle]} />
})

export { Tab }

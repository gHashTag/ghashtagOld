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
        width: 70,
        height: 70
      },
      {
        width: 55,
        height: 55
      }
    )
  }
})

type BBBT = {
  title: string,
  imageStyle: ImageStyleProp
}

const BBB = memo<BBBT>(({ title, imageStyle }) => {
  const { img } = styles

  const source = () => ICONS.filter(x => x.title === title)[0].path

  return <Image source={source()} style={[img, imageStyle]} />
})

export { BBB }

// @flow
import React, { memo } from 'react'
import { Platform, StyleSheet, Image } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { ICONS } from './images'

const styles = StyleSheet.create({
  img: {
    ...ifIphoneX(
      {
        width: Platform.OS === 'ios' ? 170 : 160,
        height: Platform.OS === 'ios' ? 130 : 120
      },
      {
        width: Platform.OS === 'ios' ? 130 : 160,
        height: Platform.OS === 'ios' ? 90 : 120
      }
    )
  }
})

type KosaT = {
  title: string
}

const Kosa = memo<KosaT>(({ title }) => {
  const { img } = styles

  const source = () => ICONS.filter(x => x.title === title)[0].path

  return <Image source={source()} style={img} />
})

export { Kosa }

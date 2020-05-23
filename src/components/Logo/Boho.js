// @flow
import React, { memo } from 'react'
import { Platform, StyleSheet, Image } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { ICONS } from './images'

const styles = StyleSheet.create({
  img: {
    ...ifIphoneX(
      {
        width: Platform.OS === 'ios' ? 230 : 200,
        height: Platform.OS === 'ios' ? 110 : 100
      },
      {
        width: Platform.OS === 'ios' ? 180 : 200,
        height: Platform.OS === 'ios' ? 90 : 100
      }
    )
  }
})

type BohoT = {
  title: string
}

const Boho = memo<BohoT>(({ title }) => {
  const { img } = styles

  const source = () => ICONS.filter(x => x.title === title)[0].path

  return <Image source={source()} style={img} />
})

export { Boho }

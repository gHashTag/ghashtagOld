// @flow
import React, { memo } from 'react'
import { Platform, StyleSheet, Image } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { ICONS } from './images'

const styles = StyleSheet.create({
  img: {
    ...ifIphoneX(
      {
        width: Platform.OS === 'ios' ? 120 : 100,
        height: Platform.OS === 'ios' ? 110 : 100,
        marginBottom: 40
      },
      {
        width: Platform.OS === 'ios' ? 80 : 100,
        height: Platform.OS === 'ios' ? 80 : 100
      }
    )
  }
})

type BohoBazarT = {
  title: string
}

const BohoBazar = memo<BohoBazarT>(({ title }) => {
  const { img } = styles

  const source = () => ICONS.filter(x => x.title === title)[0].path

  return <Image source={source()} style={img} />
})

export { BohoBazar }

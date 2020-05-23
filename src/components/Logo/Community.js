// @flow
import React, { memo } from 'react'
import { Platform, StyleSheet, Image } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { ICONS } from './images'

const styles = StyleSheet.create({
  img: {
    ...ifIphoneX(
      {
        width: Platform.OS === 'ios' ? 180 : 160,
        height: Platform.OS === 'ios' ? 29 : 27
      },
      {
        width: Platform.OS === 'ios' ? 130 : 160,
        height: Platform.OS === 'ios' ? 22 : 27
      }
    )
  }
})

type CommunityT = {
  title: string
}

const Community = memo<CommunityT>(({ title }) => {
  const { img } = styles

  const source = () => ICONS.filter(x => x.title === title)[0].path

  return <Image source={source()} style={img} />
})

export { Community }

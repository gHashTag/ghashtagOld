// @flow
import React, { memo } from 'react'
import { Image } from 'react-native'
import { ICONS } from './images'

type GT = {
  title: string,
  size: number
}

const G = memo<GT>(({ title, size = 1 }) => {
  const source = () => ICONS.filter(x => x.title === title)[0].path

  const origin = 90

  return <Image source={source()} style={{ width: origin / size, height: origin / size }} />
})

export { G }

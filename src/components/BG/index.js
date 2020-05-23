// @flow
import React, { memo } from 'react'
import type { Node } from 'react'
import { StyleSheet, ImageBackground } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { Loading } from '../Loading'
import { ICONS } from './images'

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: '100%'
  }
})

type BGT = {
  title: string,
  loading: boolean,
  children?: Node
}

const BG = memo<BGT>(({ title, children, loading }) => {
  const { img } = styles
  const {
    colors: { backgroundColor }
  } = useTheme()
  const source = () => ICONS.filter(x => x.title === title)[0].uri

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ImageBackground source={source()} style={[img, { backgroundColor }]}>
          {children}
        </ImageBackground>
      )}
    </>
  )
})

export { BG }

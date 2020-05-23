// @flow
import React, { memo } from 'react'
import type { Node } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Space,
  Button,
  ButtonMiddle,
  BBB,
  G,
  BohoBazar,
  Boho,
  Community,
  Kosa
} from './components'

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 65,
    paddingHorizontal: 15
  }
})

type UIKitT = {
  children: Node
}

const UIKit = memo<UIKitT>(({ children }) => {
  const { scrollView } = styles
  const {
    dark,
    colors: { backgroundColor }
  } = useTheme()
  const _onPress = () => console.log('click') // eslint-disable-line
  return (
    <>
      <ScrollView style={[scrollView, { backgroundColor }]}>
        <View style={{ alignItems: 'center' }}>{children}</View>
        <View style={{ alignItems: 'center' }}>
          <Space />
          <H1 title="H1" />
          <H2 title="H2" />
          <H3 title="H3" />
          <H4 title="H4" />
          <H5 title="H5" />
          <H6 title="H6" />
        </View>
        <Space />
        <View style={{ alignItems: 'center' }}>
          <H3 title="@hackathonUnicorn" />
          <Space />
          <Kosa title={dark ? 'KosaB' : 'KosaW'} />
          <Space />
          <Community title={dark ? 'CommunityB' : 'CommunityW'} />
          <Space />
          <Boho title={dark ? 'BohoB' : 'BohoW'} />
          <Space />
          <BohoBazar title={dark ? 'BohoBazarB' : 'BohoBazarW'} />
          <Space />
          <H3 title="#димкаРеактнативный" />
          <Space />
          <BBB title={dark ? '999B' : '999W'} onPress={_onPress} />
          <Space />
          <G title="G" onPress={_onPress} />
        </View>
        <Space />

        <View style={{ alignItems: 'center' }}>
          <ButtonMiddle title={dark ? 'AirB' : 'AirW'} onPress={_onPress} />
          <Space height={12} />
          <ButtonMiddle title={dark ? 'FireB' : 'FireW'} onPress={_onPress} />
          <Space height={12} />
          <ButtonMiddle title={dark ? 'WaterB' : 'WaterW'} onPress={_onPress} />
          <Space height={12} />
          <ButtonMiddle title={dark ? 'EarthB' : 'EarthW'} onPress={_onPress} />
          <Space height={12} />
          <Button title="start game" onPress={_onPress} />
        </View>
        <Space />
        <Space height={200} />
      </ScrollView>
    </>
  )
})

export default UIKit

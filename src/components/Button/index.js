// @flow
import React, { memo } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { H1 } from '../H1'

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    alignSelf: 'center'
  },
  sub: {
    marginRight: -5,
    marginTop: 2,
    marginBottom: 3,
    marginLeft: -5,
    borderWidth: 1,
    alignSelf: 'center'
  },
  h: {
    width: 220,
    paddingTop: 10,
    paddingBottom: 15
  }
})

type ButtonT = {
  title: string,
  onPress: Function
}

const Button = memo<ButtonT>(({ title, onPress }) => {
  const { container, sub, h } = styles
  const {
    colors: { primary, secondary }
  } = useTheme()

  return (
    <View style={[container, { borderColor: secondary }]}>
      <View style={[sub, { borderColor: primary }]}>
        <TouchableOpacity onPress={onPress}>
          <H1 title={title} textStyle={h} />
        </TouchableOpacity>
      </View>
    </View>
  )
})

export { Button }

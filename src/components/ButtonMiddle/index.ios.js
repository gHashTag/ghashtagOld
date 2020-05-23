// @flow
import React, { memo, useState } from 'react'
import { StyleSheet, TouchableWithoutFeedback, View, Image } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { ICONS } from './images'

const size = 100
const add = 25

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    ...ifIphoneX(
      {
        borderRadius: size + add / 2,
        width: size + add,
        height: size + add
      },
      {
        borderRadius: size / 2,
        width: size,
        height: size
      }
    ),
    shadowColor: 'black',
    shadowOffset: { height: 4 }
  },
  img: {
    width: 55,
    height: 55
  }
})

type ButtonMiddleT = {
  title: string,
  onPress: Function
}

const ButtonMiddle = memo<ButtonMiddleT>(({ onPress, title }) => {
  const [shadowOpacity, setShadow] = useState(0.3)
  const { buttonStyle, img } = styles
  const {
    colors: { backgroundColor, backgroundColor2 }
  } = useTheme()

  const onPressIn = () => setShadow(0)
  const onPressOut = () => setShadow(0.3)

  const source = () => ICONS.filter(x => x.title === title)[0].path

  return (
    <TouchableWithoutFeedback onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
      <View
        style={[
          buttonStyle,
          {
            shadowOpacity,
            backgroundColor: shadowOpacity === 0 ? backgroundColor : backgroundColor2
          }
        ]}
      >
        {shadowOpacity !== 0 && <Image source={source()} style={img} />}
      </View>
    </TouchableWithoutFeedback>
  )
})

export { ButtonMiddle }

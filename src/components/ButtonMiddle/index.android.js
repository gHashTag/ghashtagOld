// @flow
import React, { memo, useState } from 'react'
import { StyleSheet, TouchableWithoutFeedback, View, Image } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { ICONS } from './images'

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2
  },
  img: {
    width: 57,
    height: 50
  }
})

type ButtonMiddleT = {
  title: string,
  onPress: Function
}

const ButtonMiddle = memo<ButtonMiddleT>(({ onPress, title }) => {
  const [shadowOpacity, setShadow] = useState(19)
  const { buttonStyle, img } = styles
  const {
    colors: { backgroundColor, backgroundColor2 }
  } = useTheme()

  const onPressIn = () => setShadow(0)
  const onPressOut = () => setShadow(19)

  const source = () => ICONS.filter(x => x.title === title)[0].path

  return (
    <TouchableWithoutFeedback onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
      <View
        style={[
          buttonStyle,
          {
            elevation: shadowOpacity,
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

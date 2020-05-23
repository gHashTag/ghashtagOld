import React, { memo } from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { useTheme } from '@react-navigation/native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { H1 } from '../H1'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    opacity: 0.8,
    ...ifIphoneX(
      {
        height: 80
      },
      {
        height: 80
      }
    )
  },
  iconLeftStyle: {
    fontSize: 35,
    paddingLeft: 10,
    width: 40,
    ...ifIphoneX(
      {
        paddingTop: 65
      },
      {
        paddingTop: 5
      }
    )
  },
  rightIconStyle: {
    fontSize: 37,
    paddingRight: 10,
    width: 40,
    ...ifIphoneX(
      {
        paddingTop: 65
      },
      {
        paddingTop: 5
      }
    )
  }
})

const Header = memo(({ title, iconLeft, iconRight, onPress, onPressRight }) => {
  const { container, iconLeftStyle, rightIconStyle } = styles
  const {
    dark,
    colors: { secondary, primary }
  } = useTheme()
  const color = dark ? secondary : primary
  const right = iconRight === 'info' ? 'transparent' : color
  const left = iconLeft === 'info' ? 'transparent' : color
  return (
    <View style={container}>
      {iconLeft && (
        <TouchableOpacity onPress={onPress}>
          <Fontisto name={iconLeft} style={iconLeftStyle} color={left} />
        </TouchableOpacity>
      )}
      <H1 title={title} />
      {iconRight && (
        <TouchableOpacity onPress={onPressRight}>
          <Fontisto name={iconRight} style={rightIconStyle} color={right} />
        </TouchableOpacity>
      )}
    </View>
  )
})

export { Header }

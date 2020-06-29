import React from 'react'
import { StyleSheet, View } from 'react-native'
import Spinner from 'react-native-spinkit'
import { useTheme } from '@react-navigation/native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 200
  }
})

const Loading = () => {
  const {
    colors: { secondary, backgroundColor }
  } = useTheme()
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Spinner size={65} type="Pulse" color={secondary} />
    </View>
  )
}

export { Loading }

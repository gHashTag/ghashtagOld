import React from 'react'
import { StyleSheet, View } from 'react-native'
import Spinner from 'react-native-spinkit'
import { useTheme } from '@react-navigation/native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 200,
    backgroundColor: 'transparent'
  }
})

const Loading = () => {
  const {
    colors: { secondary }
  } = useTheme()
  return (
    <View style={styles.container}>
      <Spinner size={45} type="9CubeGrid" color={secondary} />
    </View>
  )
}

export { Loading }

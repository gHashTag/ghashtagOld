// @flow
import { Analytics } from 'aws-amplify'
import React, { memo, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { StyleSheet, View } from 'react-native'
import { NavigationState, NavigationScreenProp, useTheme } from '@react-navigation/native'
import { BBB, G, Button, H3, Space, BG } from '../../components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  h3: {
    marginBottom: 0
  }
})

type Stack0T = {
  navigation: NavigationScreenProp<NavigationState>
}

const Stack0 = memo<Stack0T>(({ navigation }) => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    const key = async () => {
      //await AsyncStorage.removeItem('@id')
      try {
        const id = await AsyncStorage.getItem('@id')
        if (id) {
          navigation.navigate('TabNavigator')
          setLoading(false)
        } else {
          setLoading(false)
        }
      } catch (err) {
        Analytics.record({
          name: 'Stack0',
          attributes: err
        })
        setLoading(false)
      }
    }
    key()
  }, [navigation])

  const { container, h3 } = styles
  const { dark } = useTheme()
  const _onPress = () => navigation.navigate('Stack1')
  return (
    <BG title={dark ? 'CristalsB' : 'CristalsW'} loading={loading}>
      <View style={container}>
        <Space height={40} />
        <BBB title={dark ? '999B' : '999W'} onPress={_onPress} />
        <G title="G" onPress={_onPress} />
        <Button title="start game" onPress={_onPress} />
        <Space height={0} />
        <H3 title="@hackthonUnicorn" viewStyle={h3} />
        <Space height={0} />
      </View>
    </BG>
  )
})

export { Stack0 }

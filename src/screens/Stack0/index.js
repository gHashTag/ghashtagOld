// @flow
import { Analytics, Auth } from 'aws-amplify'
import React, { memo, useEffect, useCallback, useState } from 'react'
import * as Keychain from 'react-native-keychain'
import { StyleSheet, View } from 'react-native'
import { NavigationState, NavigationScreenProp, useTheme } from '@react-navigation/native'
import { BBB, G, Button, H3, Space, BG } from '../../components'
import { onScreen } from '../../constants'

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

  const key = useCallback(async () => {
    //await Keychain.resetInternetCredentials('auth')
    try {
      const credentials = await Keychain.getInternetCredentials('auth')
      if (credentials) {
        const { username, password } = credentials
        const user = await Auth.signIn(username, password)
        user && onScreen('MAIN', navigation)()
        setLoading(false)
      } else {
        setLoading(false)
      }
    } catch (err) {
      setLoading(false)
      Analytics.record({
        name: 'Stack0',
        attributes: err
      })
    }
  }, [navigation])

  useEffect(() => {
    setLoading(true)
    key()
  }, [navigation, key])

  const { container, h3 } = styles
  const { dark } = useTheme()

  return (
    <BG title={dark ? 'CristalsB' : 'CristalsW'} loading={loading}>
      <View style={container}>
        <Space height={40} />
        <BBB title={dark ? '999B' : '999W'} onPress={onScreen('HELLO', navigation)} />
        <G title="G" onPress={onScreen('HELLO', navigation)} />
        <Button title="start game" onPress={onScreen('HELLO', navigation)} />
        <Space height={0} />
        <H3 title="@hackthonUnicorn" viewStyle={h3} />
        <Space height={0} />
      </View>
    </BG>
  )
})

export { Stack0 }

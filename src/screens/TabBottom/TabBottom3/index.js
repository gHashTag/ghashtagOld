// @flow
import React, { memo, useEffect, useState, useCallback } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { Analytics, Auth } from 'aws-amplify'
import { DataStore } from '@aws-amplify/datastore'
import * as Keychain from 'react-native-keychain'
import _ from 'lodash'
import type { TextStyleProp, ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { NavigationState, NavigationScreenProp, useTheme } from '@react-navigation/native'
import { Element } from '../../../models'
import { Space, BG, ButtonMiddle, H1, Button } from '../../../components'
import { onScreen, goHome } from '../../../constants'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

type TabBottom3T = {
  navigation: NavigationScreenProp<NavigationState>,
  textStyle?: TextStyleProp,
  viewStyle?: ViewStyleProp
}

const TabBottom3 = memo<TabBottom3T>(({ navigation }) => {
  const [userAuth, setUser] = useState(true)
  const [loading, setLoading] = useState(false)
  const [elem, setElem] = useState({
    air: false,
    earth: false,
    fire: false,
    id: '',
    uniqueId: '',
    water: true
  })
  const { container } = styles
  const { dark } = useTheme()

  const getData = async () => {
    // await DataStore.delete()
    try {
      const owner = Auth.user.attributes.sub
      const element = await DataStore.query(Element, (c) => c.owner('eq', owner))
      element[0] && setElem(element[0])
      setLoading(false)
    } catch (err) {
      setLoading(false)
      Analytics.record({
        name: 'TabBottom4',
        attributes: err
      })
    }
  }

  const key = useCallback(async () => {
    try {
      const credentials = await Keychain.getInternetCredentials('auth')
      if (credentials) {
        const { username, password } = credentials
        const user = await Auth.signIn(username, password)
        setLoading(false)
        user && setUser(true)
        getData()
      } else {
        setLoading(false)
        setUser(false)
      }
    } catch (err) {
      Analytics.record({
        name: 'TabBottom3',
        attributes: err
      })
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    key()
    setLoading(true)
    const subscription = DataStore.observe(Element).subscribe(() => getData())
    return () => {
      subscription.unsubscribe()
    }
  }, [navigation, key])

  const arr = _(elem).reduce((trues, v, k) => {
    if (v === true) trues.push(k)
    return trues
  }, [])
  const str = arr[0]
  const newStr = `${str[0].toUpperCase()}${str.slice(1)}`

  const _onPress = async () => {
    await Auth.signOut()
    await Keychain.resetInternetCredentials('auth')
    setUser(false)
    goHome(navigation)()
  }

  return (
    <BG title={dark ? 'CristalsB' : 'CristalsW'} loading={loading}>
      <View style={container}>
        <Space height={Platform.OS === 'ios' ? 80 : 40} />
        {userAuth && (
          <>
            <H1 title="Your team" />
            <Space height={Platform.OS === 'ios' ? 50 : 80} />
            <ButtonMiddle title={dark ? `${newStr}B` : `${newStr}W`} onPress={onScreen('Stack2', navigation, elem)} />
          </>
        )}
        <Space height={Platform.OS === 'ios' ? 20 : 40} />
      </View>
      <Space height={Platform.OS === 'ios' ? 200 : 200} />
      {userAuth && <Button title="Sign Out" onPress={_onPress} />}
    </BG>
  )
})

export { TabBottom3 }

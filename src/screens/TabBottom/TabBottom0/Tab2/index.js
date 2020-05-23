// @flow
import React, { memo, useState, useEffect, useReducer } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { Analytics, Auth } from 'aws-amplify'
import * as Keychain from 'react-native-keychain'
import { useTheme, NavigationState, NavigationScreenProp } from '@react-navigation/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { DataStore, Predicates } from '@aws-amplify/datastore'
import { Element } from '../../../../models'
import { ButtonCircle, Score, Space, BG } from '../../../../components'
import { initialState, reducer } from '../../../helper'
import { onScreen } from '../../../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
})

type Tab2T = {
  navigation: NavigationScreenProp<NavigationState>
}

const Tab2 = memo<Tab2T>(({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const [userAuth, setUser] = useState(true)
  const [state, dispatch] = useReducer(reducer, initialState)

  const getData = async () => {
    setLoading(true)
    try {
      const elements = await DataStore.query(Element, Predicates.ALL, {
        page: 0,
        limit: 1000
      })
      // console.log('elements', elements)
      //const job = await DataStore.query(Element, 'f609910e-a66d-45c1-a46d-38a149d6dccd')
      //await DataStore.delete(job)
      dispatch({ type: 'QUERY', elements })
      setLoading(false)
    } catch (err) {
      Analytics.record({
        name: 'Tab2',
        attributes: err
      })
    }
  }

  const key = async () => {
    //await Keychain.resetInternetCredentials('auth')
    try {
      const credentials = await Keychain.getInternetCredentials('auth')

      if (credentials) {
        const { username, password } = credentials
        const user = await Auth.signIn(username, password)
        setLoading(false)
        user && setUser(true)
      } else {
        setLoading(false)
        setUser(false)
      }
    } catch (err) {
      console.log('error', err) // eslint-disable-line
      setLoading(false)
    }
  }

  useEffect(() => {
    setLoading(true)
    key()
    getData()
    const subscription = DataStore.observe(Element).subscribe(() => getData() && key())
    return () => {
      subscription.unsubscribe()
    }
  }, [navigation])

  const { container } = styles
  const { dark } = useTheme()
  const { elements } = state

  return (
    <BG title={dark ? 'shakti2B' : 'shakti2W'} loading={loading}>
      <View style={container}>
        <Space height={Platform.OS === 'ios' ? getStatusBarHeight() : 20} />
        <Score title={`${elements.length}`} />
        <Space height={Platform.OS === 'ios' ? 10 : 20} />
        {!userAuth && <ButtonCircle title="Start Game" onPress={onScreen('HELLO', navigation)} />}
      </View>
    </BG>
  )
})

export { Tab2 }

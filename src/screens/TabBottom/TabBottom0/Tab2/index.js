// @flow
import React, { memo, useState, useEffect, useReducer } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { Analytics } from 'aws-amplify'
import { useTheme, NavigationState, NavigationScreenProp } from '@react-navigation/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { DataStore, Predicates } from '@aws-amplify/datastore'
import { Element } from '../../../../models'
import { Score, Space, BG, H1 } from '../../../../components'
import { initialState, reducer } from '../../../helper'

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
  const [state, dispatch] = useReducer(reducer, initialState)

  const getData = async () => {
    setLoading(true)
    try {
      const elements = await DataStore.query(Element, Predicates.ALL, {
        page: 0,
        limit: 1000
      })
      dispatch({ type: 'QUERY', elements })
      setLoading(false)
    } catch (err) {
      Analytics.record({
        name: 'Tab2',
        attributes: err
      })
    }
  }
  // const deleteJob = async () => {
  //   //await DataStore.clear(Gallery)
  //   const job = await DataStore.query(Element, 'c256f031-30e0-455e-ad44-8c5fe04fa7a9')
  //   const del = await DataStore.delete(job)
  //   console.warn('del', del)
  // }

  useEffect(() => {
    //deleteJob()
    getData()
    const subscription = DataStore.observe(Element).subscribe(() => getData())
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
        <Space height={Platform.OS === 'ios' ? getStatusBarHeight() : 10} />
        <H1 title="Total score:" />
        <Score title={`${elements.length}`} />
        <Space height={Platform.OS === 'ios' ? 10 : 20} />
      </View>
    </BG>
  )
})

export { Tab2 }

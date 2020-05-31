// @flow
import React, { memo, useState, useEffect, useReducer } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { Analytics } from 'aws-amplify'
import type { TextStyleProp, ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { DataStore } from '@aws-amplify/datastore'
import { useTheme } from '@react-navigation/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { Element } from '../../../../models'
import { initialState, reducer } from '../../../helper'
import { Boho, Score, Space, BG } from '../../../../components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
})

type Tab1T = {
  textStyle?: TextStyleProp,
  viewStyle?: ViewStyleProp
}

const Tab1 = memo<Tab1T>(() => {
  const [loading, setLoading] = useState(false)
  const { dark } = useTheme()
  const [state, dispatch] = useReducer(reducer, initialState)
  const getData = async () => {
    setLoading(true)
    try {
      const elements = await DataStore.query(Element, (c) => c.air('eq', true))
      dispatch({ type: 'QUERY', elements })
      setLoading(false)
    } catch (err) {
      Analytics.record({
        name: 'Tab1',
        attributes: err
      })
    }
  }

  useEffect(() => {
    setLoading(true)
    getData()
    const subscription = DataStore.observe(Element).subscribe(() => getData())
    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const { elements } = state
  const { container } = styles
  return (
    <BG title={dark ? 'shakti1B' : 'shakti1W'} loading={loading}>
      <View style={container}>
        <Space height={Platform.OS === 'ios' ? getStatusBarHeight() : 20} />
        <Score title={`${elements.length}`} />
        <Space height={Platform.OS === 'ios' ? 10 : 20} />
        <Boho title={dark ? 'BohoB' : 'BohoW'} />
      </View>
    </BG>
  )
})

export { Tab1 }

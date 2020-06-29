// @flow
import React, { memo, useState, useEffect } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { Analytics } from 'aws-amplify'
import { DataStore } from '@aws-amplify/datastore'
import type { TextStyleProp, ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { NavigationState, NavigationScreenProp, useTheme } from '@react-navigation/native'
import { Element } from '../../../../models'
import { ButtonMiddle, H1, H3, Space, BG } from '../../../../components'
import { goBack } from '../../../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  h3: {
    marginBottom: 20
  }
})

type Stack2T = {
  navigation: NavigationScreenProp<NavigationState>,
  textStyle?: TextStyleProp,
  viewStyle?: ViewStyleProp
}

const Stack2 = memo<Stack2T>(({ route, navigation }) => {
  const { container, h3 } = styles
  const { dark } = useTheme()
  const [input, setObj] = useState({
    id: '',
    position: '',
    rate: '',
    description: ''
  })

  useEffect(() => {
    const obj = route.params
    if (typeof obj !== 'undefined') {
      setObj(obj)
    }
  }, [route.params])

  const updateObj = async ({ air, fire, water, earth }) => {
    try {
      const original = await DataStore.query(Element, input.id)
      const update = await DataStore.save(
        Element.copyOf(original, (updated) => {
          updated.air = air
          updated.fire = fire
          updated.water = water
          updated.earth = earth
        })
      )
      update && goBack(navigation)()
    } catch (err) {
      Analytics.record({
        name: 'Stack2',
        attributes: err
      })
    }
  }

  return (
    <BG title={dark ? 'CristalsB' : 'CristalsW'}>
      <View style={container}>
        <Space height={Platform.OS === 'ios' ? 50 : 20} />
        <H1 title="CHANGE TEAM" />
        <ButtonMiddle
          title={dark ? 'FireB' : 'FireW'}
          onPress={() => updateObj({ air: false, fire: true, water: false, earth: false })}
        />
        <ButtonMiddle
          title={dark ? 'AirB' : 'AirW'}
          onPress={() => updateObj({ air: true, fire: false, water: false, earth: false })}
        />
        <ButtonMiddle
          title={dark ? 'WaterB' : 'WaterW'}
          onPress={() => updateObj({ air: false, fire: false, water: true, earth: false })}
        />
        <ButtonMiddle
          title={dark ? 'EarthB' : 'EarthW'}
          onPress={() => updateObj({ air: false, fire: false, water: false, earth: true })}
        />
        <H3 title="@hackathonUnicorn" viewStyle={h3} />
      </View>
    </BG>
  )
})

export { Stack2 }

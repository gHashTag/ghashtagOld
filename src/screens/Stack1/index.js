// @flow
import React, { memo } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { Auth } from 'aws-amplify'
import { NavigationState, NavigationScreenProp, useTheme } from '@react-navigation/native'
import { DataStore } from '@aws-amplify/datastore'
import { Element } from '../../models'
import { ButtonMiddle, H1, H3, Space, BG } from '../../components'
import { goHome, onScreen } from '../../constants'

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

type Stack1T = {
  navigation: NavigationScreenProp<NavigationState>
}

const Stack1 = memo<Stack1T>(({ navigation }) => {
  const _onPress = async (input) => {
    try {
      const selected = await DataStore.save(new Element({ ...input }))
      selected && onScreen('MAIN', navigation)()
    } catch (e) {
      console.log('Stack1', e) //eslint-disable-line
    }
  }

  const { container, h3 } = styles
  const { dark } = useTheme()
  const owner = Auth.user.attributes.sub

  return (
    <BG title={dark ? 'CristalsB' : 'CristalsW'}>
      <View style={container}>
        <Space height={Platform.OS === 'ios' ? 30 : 20} />
        <H1 title="SELECT TEAM" />
        <ButtonMiddle
          title={dark ? 'FireB' : 'FireW'}
          onPress={() => _onPress({ air: false, fire: true, water: false, earth: false, owner })}
        />
        <ButtonMiddle
          title={dark ? 'AirB' : 'AirW'}
          onPress={() => _onPress({ air: true, fire: false, water: false, earth: false, owner })}
        />
        <ButtonMiddle
          title={dark ? 'WaterB' : 'WaterW'}
          onPress={() => _onPress({ air: false, fire: false, water: true, earth: false, owner })}
        />
        <ButtonMiddle
          title={dark ? 'EarthB' : 'EarthW'}
          onPress={() => _onPress({ air: false, fire: false, water: false, earth: true, owner })}
        />
        <H3 title="@hackathonUnicorn" viewStyle={h3} />
        <Space height={Platform.OS === 'ios' ? 0 : 20} />
      </View>
    </BG>
  )
})

export { Stack1 }

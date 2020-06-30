/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
///* eslint-disable */
import React from 'react'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import Amplify from '@aws-amplify/core'
import * as Keychain from 'react-native-keychain'
import { AmplifyProvider } from 'aws-amplify-react-hooks'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { ThemeProvider, DarkTheme, LightTheme } from './theme'
import AppNavigator from './AppNavigator'
import awsconfig from '../aws-exports'

const client = {
  Auth,
  API,
  graphqlOperation
}

AmplifyProvider(client)

const MEMORY_KEY_PREFIX = '@MyStorage:'
let dataMemory = {}

class MyStorage {
  static syncPromise = null

  static setItem(key, value) {
    Keychain.setGenericPassword(MEMORY_KEY_PREFIX + key, value)
    dataMemory[key] = value
    return dataMemory[key]
  }

  static getItem(key) {
    return Object.prototype.hasOwnProperty.call(dataMemory, key) ? dataMemory[key] : undefined
  }

  static removeItem(key) {
    Keychain.resetGenericPassword()
    return delete dataMemory[key]
  }

  static clear() {
    dataMemory = {}
    return dataMemory
  }
}

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: false
  },
  storage: MyStorage
})

const App: () => React$Node = () => {
  //const [value] = useState(false)
  const scheme = useColorScheme()
  const theme = scheme === 'dark' ? DarkTheme : LightTheme
  return (
    <>
      <AppearanceProvider>
        <AmplifyProvider client={client}>
          <ThemeProvider theme={theme}>
            <AppNavigator />
          </ThemeProvider>
        </AmplifyProvider>
      </AppearanceProvider>
    </>
  )
}

//window.LOG_LEVEL = 'DEBUG'

export default App

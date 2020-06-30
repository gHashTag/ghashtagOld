/**
 * @format
 */

import { AppRegistry, YellowBox } from 'react-native'
import TrackPlayer from 'react-native-track-player'
import App from './src'
import { name as appName } from './app.json'

YellowBox.ignoreWarnings([
  'Warning: AsyncStorage',
  'Possible Unhandled',
  'Warning: Possible Unhandled Prom',
  'Warning: componentWillReceiveProps',
  'RCTRootView cancelTouches',
  'not authenticated',
  'Animated: `useNativeDriver`',
  'Sending `onAnimatedValueUpdate`',
  'DataStore - Connection failed:',
  "Can't perform a React state",
  'Setting a timer'
])

AppRegistry.registerComponent(appName, () => App)
TrackPlayer.registerPlaybackService(() => require('./service.js'))

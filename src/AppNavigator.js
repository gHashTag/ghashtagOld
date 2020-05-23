import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { enableScreens } from 'react-native-screens' // eslint-disable-line
import { Stack0, Stack1, Stack2 } from './screens'
import { Tab0, Tab1, Tab2, Tab3, Tab4 } from './screens/TabBottom/TabBottom0'
import { SignUp, SignIn, ConfirmSignUp, User, Forgot, ForgotPassSubmit, Hello } from './screens/Authenticator'
import { TabBottom1, TabBottom4 } from './screens/TabBottom'
import TabBottom3 from './screens/TabBottom/TabBottom3'
import TabNavigator from './TabNavigator'
import TopTabNavigator from './TopTabNavigator'
import { ButtonPlay } from './components'

enableScreens()

const Stack = createNativeStackNavigator()

const TabsTop = () => {
  return (
    <TopTabNavigator.Navigator initialRouteName="TabTop2">
      <TopTabNavigator.Screen name="TabTop0" component={Tab0} />
      <TopTabNavigator.Screen name="TabTop1" component={Tab1} />
      <TopTabNavigator.Screen name="TabTop2" component={Tab2} />
      <TopTabNavigator.Screen name="TabTop3" component={Tab3} />
      <TopTabNavigator.Screen name="TabTop4" component={Tab4} />
    </TopTabNavigator.Navigator>
  )
}

const Tab = () => {
  return (
    <>
      <TabNavigator.Navigator initialRouteName="TabBottom0">
        <TabNavigator.Screen name="TabBottom0" component={TabsTop} />
        <TabNavigator.Screen name="TabBottom1" component={TabBottom1} />
        <TabNavigator.Screen name="TabBottom2" component={TabBottom3} />
        <TabNavigator.Screen name="TabBottom3" component={TabBottom3} />
        <TabNavigator.Screen name="TabBottom4" component={TabBottom4} />
      </TabNavigator.Navigator>
      <ButtonPlay />
    </>
  )
}

const AppNavigator = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="MAIN"
      >
        <Stack.Screen name="MAIN" component={Tab} />
        <Stack.Screen name="HELLO" component={Hello} />
        <Stack.Screen name="SIGN_UP" component={SignUp} />
        <Stack.Screen name="SIGN_IN" component={SignIn} />
        <Stack.Screen name="FORGOT" component={Forgot} />
        <Stack.Screen name="FORGOT_PASSWORD_SUBMIT" component={ForgotPassSubmit} />
        <Stack.Screen name="CONFIRM_SIGN_UP" component={ConfirmSignUp} />
        <Stack.Screen name="USER" component={User} />
        <Stack.Screen name="Stack0" component={Stack0} />
        <Stack.Screen name="Stack1" component={Stack1} />
        <Stack.Screen name="Stack2" component={Stack2} />
      </Stack.Navigator>
    </SafeAreaProvider>
  )
}

export default AppNavigator

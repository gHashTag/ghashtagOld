// @flow
import React, { memo } from 'react'
import { Platform } from 'react-native'
import type { Node } from 'react'
import { AppearanceProvider } from 'react-native-appearance'
import { NavigationContainer } from '@react-navigation/native'
import { ifIphoneX } from 'react-native-iphone-x-helper'

const mainColor = {
  primary: '#50E3C2',
  secondary: '#ff06f4'
}

const h0 = {
  fontFamily: Platform.OS === 'ios' ? 'Etna' : 'etna-free-font',
  fontSize: Platform.OS === 'ios' ? 45 : 45
}

const h1 = {
  fontFamily: Platform.OS === 'ios' ? 'KLMN-Flash-Pix' : 'KLMN_Flash_Pix',
  fontSize: 20
}

const h2 = {
  fontFamily: Platform.OS === 'ios' ? 'The Dolbak' : 'TheDolbak-Brush',
  fontSize: 16
}

const h3 = {
  fontFamily: Platform.OS === 'ios' ? 'KLMN-Flash-Pix' : 'KLMN_Flash_Pix',
  fontSize: 16
}

const h4 = {
  fontFamily: 'Avenir Next',
  fontSize: 22
}

const h5 = {
  fontFamily: 'Avenir Next',
  ...ifIphoneX(
    {
      fontSize: 25
    },
    {
      fontSize: 18
    }
  )
}

const h6 = {
  fontFamily: Platform.OS === 'ios' ? 'KLMN-Flash-Pix' : 'KLMN_Flash_Pix',
  fontSize: 16
}

const body = {
  fontFamily: Platform.OS === 'ios' ? 'KLMN-Flash-Pix' : 'KLMN_Flash_Pix',
  fontSize: Platform.OS === 'ios' ? 16 : 17
}

const DarkTheme = {
  dark: true,
  colors: {
    ...mainColor,
    backgroundColor: '#1D1E1F',
    backgroundColor2: '#222325',
    text: '#ffffff',
    text2: '#707070',
    text3: '#D1CDCD'
  },
  h0: {
    ...h0
  },
  h1: {
    ...h1,
    color: '#ffffff'
  },
  h2: {
    ...h2,
    color: '#ffffff'
  },
  h3: {
    ...h3,
    color: '#ffffff'
  },
  h4: {
    ...h4,
    color: '#707070'
  },
  h5: {
    ...h5,
    color: '#D1CDCD'
  },
  h6: {
    ...h6,
    color: '#ffffff'
  },
  body: {
    ...body,
    color: '#949494'
  }
}

const LightTheme = {
  dark: false,
  colors: {
    ...mainColor,
    buttonColor: '#1D1E1F',
    backgroundColor: '#ffffff',
    backgroundColor2: '#ffffff',
    text: '#1D1E1F',
    placeholderTextColor: '#707070'
  },
  h0: {
    ...h0
  },
  h1: {
    ...h1,
    color: '#1D1E1F'
  },
  h2: {
    ...h2,
    color: '#1D1E1F'
  },
  h3: {
    ...h3,
    color: '#1D1E1F'
  },
  h4: {
    ...h4,
    color: '#707070'
  },
  h5: {
    ...h5,
    color: '#D1CDCD'
  },
  h6: {
    ...h6,
    color: '#1D1E1F'
  },
  body: {
    ...body,
    color: '#949494'
  }
}

type ThemeProviderT = {
  children?: Node,
  theme: {}
}

const ThemeProvider = memo<ThemeProviderT>(({ children, theme }) => {
  return (
    <>
      <AppearanceProvider>
        <NavigationContainer theme={theme}>{children}</NavigationContainer>
      </AppearanceProvider>
    </>
  )
})

export { ThemeProvider, DarkTheme, LightTheme }

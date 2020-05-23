import React, { memo } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import StatusBarAlert from 'react-native-statusbar-alert'
import { useTheme } from '@react-navigation/native'
import { Header } from '../Header'
import { Space } from '../Space'
import { Loading } from '../Loading'
import { BG } from '../BG'

const styles = StyleSheet.create({
  container: { flexGrow: 1 },
  sub: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  subClean: {
    flex: 1
  },
  statusBar: { padding: 5, paddingTop: 5 }
})

const AppContainer = memo(
  ({
    flatlist = false,
    clean,
    iconLeft,
    onPress = null,
    onPressRight = null,
    iconRight = 'info',
    children,
    message = '',
    title,
    loading
  }) => {
    const { container, sub, subClean, statusBar } = styles
    const {
      dark,
      colors: { red, black, white }
    } = useTheme()
    const backgroundColor = dark ? black : white
    const cleanStyle = clean ? subClean : sub
    return (
      <BG title={dark ? 'CristalsB' : 'CristalsW'} loading={loading}>
        <StatusBarAlert
          visible={message !== ''}
          message={message}
          backgroundColor={red}
          color="red"
          pulse="background"
          height={40}
          style={statusBar}
        />
        {title && (
          <Header
            title={title}
            onPress={onPress}
            onPressRight={onPressRight}
            iconLeft={iconLeft}
            iconRight={iconRight}
          />
        )}
        <>
          {loading ? (
            <Loading />
          ) : (
            <>
              {!flatlist ? (
                <ScrollView contentContainerStyle={container} style={{ backgroundColor }}>
                  <View style={sub}>{children}</View>
                  <Space height={200} />
                </ScrollView>
              ) : (
                <>
                  <View style={[cleanStyle, { backgroundColor }]}>{children}</View>
                </>
              )}
            </>
          )}
        </>
      </BG>
    )
  }
)

export { AppContainer }

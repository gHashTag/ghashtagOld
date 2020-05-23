// @flow
import React, { memo, useRef, useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native'
import type { TextStyleProp, ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import _ from 'lodash'
import { connect } from 'react-redux'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import API, { graphqlOperation } from '@aws-amplify/api'
import { useTheme } from '@react-navigation/native'
import { listRadios } from '../../graphql/queries'
import { setPlay } from '../../actions'
import { W } from '../../constants'

const size = 70

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    ...ifIphoneX(
      {
        bottom: 55
      },
      {
        bottom: 15
      }
    ),
    left: W / 2 - size / 2,
    width: size,
    height: size,
    borderRadius: size / 2,
    shadowColor: 'black',
    elevation: 3,
    shadowOffset: { height: 4 },
    shadowOpacity: 0.3
  },
  img: {
    ...ifIphoneX(
      {
        width: size + 15,
        height: size + 15
      },
      {
        width: size,
        height: size
      }
    ),
    alignSelf: 'center'
  }
})

type ButtonPlayT = {
  textStyle: TextStyleProp,
  viewStyle: ViewStyleProp
}

const rotation = new Animated.Value(0)

const ButtonPlay = memo<ButtonPlayT>(props => {
  const { container, img } = styles
  const { dark } = useTheme()
  const [toggled, setToggled] = useState(!false)
  const [elem, setElem] = useState({})
  const [currentTrack, setCurrentTrack] = useState(0)

  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['90deg', '0deg']
  })

  const rotationLoop = () => {
    return Animated.timing(rotation, {
      toValue: 1,
      duration: 100,
      easing: Easing.linear
    }).start()
  }

  useEffect(() => {
    const key = async () => {
      try {
        const elementData = await API.graphql(graphqlOperation(listRadios, { limit: 100 }))
        setElem(elementData.data.listRadios.items)
      } catch (err) {
        console.log('error', err) // eslint-disable-line
      }
    }
    key()
  }, [])

  const nextTrack = () => {
    if (currentTrack !== elem.length - 1) {
      setCurrentTrack(currentTrack + 1)
    } else {
      setCurrentTrack(0)
    }
  }

  const _onPress = () => {
    setToggled(!toggled)
    const random = _.random(0, elem.length - 1)
    props.setPlay({ toggled, track: elem[random] })
    !toggled && nextTrack()
    if (toggled) {
      Animated.parallel([rotationLoop()]).start()
    } else {
      Animated.parallel([Animated.timing(rotation, { toValue: 0, duration: 100 })]).start()
    }
  }

  const _onEnd = () => {
    nextTrack()
    props.setPlay({ toggled: true, track: elem[currentTrack + 1] })
  }

  const icon = dark ? require('./images/PlayB.png') : require('./images/PlayW.png')

  const { uri } = props.track

  const player = useRef()
  return (
    <>
      <TouchableOpacity style={container} onPress={_onPress}>
        <Animated.Image source={icon} style={[img, { transform: [{ rotate: spin }] }]} />
      </TouchableOpacity>
    </>
  )
})

//export { ButtonPlay }
const mapStateToProps = state => {
  return {
    toggled: state.play.toggled,
    track: state.play.track
  }
}

export default connect(mapStateToProps, { setPlay })(ButtonPlay)
//<Video
//ignoreSilentSwitch="ignore"
//playWhenInactive
//playInBackground
//paused={toggled}
//resizeMode="cover"
//source={{ uri }}
//ref={ref => player === ref}
//bufferConfig={bufferConfig}
//onEnd={_onEnd}
///>

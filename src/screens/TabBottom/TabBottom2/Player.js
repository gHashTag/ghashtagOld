import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { Platform, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import TrackPlayer, { useTrackPlayerProgress, usePlaybackState, useTrackPlayerEvents } from 'react-native-track-player'
import { useTheme } from '@react-navigation/native'
import { H1, H5, Space } from '../../../components'
import { W } from '../../../constants'

const styles = StyleSheet.create({
  cardStyle: {
    width: '80%',
    alignItems: 'center'
  },
  coverStyle: {
    width: 240,
    height: 240,
    backgroundColor: 'transparent'
  },
  progress: {
    height: 1,
    width: '90%',
    marginTop: 10,
    flexDirection: 'row'
  },
  titleStyle: {
    marginTop: 10
  },
  artistStyle: {
    fontWeight: 'bold'
  },
  controlsStyle: {
    marginVertical: 20,
    flexDirection: 'row'
  },
  controlButtonContainer: {
    flex: 1
  },
  controlButtonText: {
    fontSize: 40,
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'The Dolbak' : 'TheDolbak-Brush'
  },
  h: {
    width: W - 100,
    textAlign: 'center'
  }
})

const ProgressBar = () => {
  const progress = useTrackPlayerProgress()
  const {
    colors: { secondary }
  } = useTheme()
  return (
    <View style={styles.progress}>
      <View style={{ flex: progress.position, backgroundColor: secondary }} />
      <View
        style={{
          flex: progress.duration - progress.position,
          backgroundColor: 'grey'
        }}
      />
    </View>
  )
}

const { controlButtonContainer, controlButtonText, cardStyle, coverStyle, controlsStyle, h } = styles

function ControlButton({ title, onPress }) {
  const {
    dark,
    colors: { secondary, primary }
  } = useTheme()
  return (
    <TouchableOpacity style={controlButtonContainer} onPress={onPress}>
      <Text style={[controlButtonText, { color: dark ? primary : secondary }]}>{title}</Text>
    </TouchableOpacity>
  )
}

const Player = ({ style, onNext, onPrevious, onTogglePlayback }) => {
  const playbackState = usePlaybackState()
  const [track, setTrack] = useState('')

  useTrackPlayerEvents(['playback-track-changed'], async (event) => {
    if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
      const tr = await TrackPlayer.getTrack(event.nextTrack)
      const jsonValue = JSON.stringify(tr)
      await AsyncStorage.setItem('@track', jsonValue)
      setTrack(tr)
    }
  })

  var middleButtonText = 'Play' // eslint-disable-line

  if (playbackState === TrackPlayer.STATE_PLAYING || playbackState === TrackPlayer.STATE_BUFFERING) {
    middleButtonText = 'Pause'
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@track')
      const value = jsonValue != null ? JSON.parse(jsonValue) : null
      if (value !== null) {
        setTrack(value)
      }
    } catch (e) {
      // error reading value
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const { title, artwork, artist } = track
  return (
    <View style={[cardStyle, style]}>
      <Image style={coverStyle} source={{ uri: artwork }} />
      <Space height={10} />
      <ProgressBar />
      <Space height={10} />
      <H1 title={title} textStyle={h} />
      <Space height={10} />
      <H5 title={artist} textStyle={h} />
      <View style={controlsStyle}>
        <ControlButton title={'<<'} onPress={onPrevious} />
        <ControlButton title={middleButtonText} onPress={onTogglePlayback} />
        <ControlButton title={'>>'} onPress={onNext} />
      </View>
    </View>
  )
}

export { Player }

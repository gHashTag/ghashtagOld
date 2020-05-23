// @flow
import React, { memo, useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import type { TextStyleProp, ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { connect } from 'react-redux'
import { useTheme } from '@react-navigation/native'
import TrackPlayer, { usePlaybackState } from 'react-native-track-player'
import API, { graphqlOperation } from '@aws-amplify/api'
import { listPlaylists } from '../../../graphql/queries'
import Player from './Player'
import { BG } from '../../../components'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

type TabBottom3T = {
  toggled: boolean,
  track: { artist: string, title: string, album: string, cover: string },
  textStyle?: TextStyleProp,
  viewStyle?: ViewStyleProp
}

const TabBottom3 = memo<TabBottom3T>(() => {
  const { container } = styles
  const { dark } = useTheme()
  const [elem, setElem] = useState({})

  const playbackState = usePlaybackState()

  async function setup() {
    await TrackPlayer.setupPlayer({})
    await TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        TrackPlayer.CAPABILITY_STOP
      ],
      compactCapabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE]
    })
  }

  useEffect(() => {
    setup()
    const key = async () => {
      try {
        const elementData = await API.graphql(graphqlOperation(listPlaylists, { limit: 200 }))
        setElem(elementData.data.listPlaylists.items)
      } catch (err) {
        console.log('error', err) // eslint-disable-line
      }
    }
    key()
  }, [])

  const togglePlayback = async () => {
    const currentTrack = await TrackPlayer.getCurrentTrack()
    if (currentTrack == null) {
      await TrackPlayer.reset()
      await TrackPlayer.add(elem)
      await TrackPlayer.play()
    } else {
      if (playbackState === TrackPlayer.STATE_PAUSED) {
        // eslint-disable-line
        await TrackPlayer.play()
      } else {
        await TrackPlayer.pause()
      }
    }
  }

  const getStateName = state => {
    switch (state) {
      case TrackPlayer.STATE_NONE:
        return 'None'
      case TrackPlayer.STATE_PLAYING:
        return 'Playing'
      case TrackPlayer.STATE_PAUSED:
        return 'Paused'
      case TrackPlayer.STATE_STOPPED:
        return 'Stopped'
      case TrackPlayer.STATE_BUFFERING:
        return 'Buffering'
      default:
        return 'None'
    }
  }

  async function skipToNext() {
    try {
      await TrackPlayer.skipToNext()
    } catch (_) {}
  }

  async function skipToPrevious() {
    try {
      await TrackPlayer.skipToPrevious()
    } catch (_) {}
  }

  return (
    <>
      <BG title={dark ? 'CristalsB' : 'CristalsW'}>
        <View style={container}>
          <Player
            onNext={skipToNext}
            style={styles.player}
            onPrevious={skipToPrevious}
            onTogglePlayback={togglePlayback}
          />
          <Text style={styles.state}>{getStateName(playbackState)}</Text>
        </View>
      </BG>
    </>
  )
})

const mapStateToProps = state => {
  return {
    toggled: state.play.toggled,
    track: state.play.track
  }
}

export default connect(mapStateToProps, null)(TabBottom3)

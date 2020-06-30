// @flow
import React, { memo, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import type { TextStyleProp, ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import TrackPlayer, { usePlaybackState } from 'react-native-track-player'
import { Analytics } from 'aws-amplify'
import { DataStore, Predicates } from '@aws-amplify/datastore'
import _ from 'lodash'
import { Playlist } from '../../../models'
import { Player } from './Player'
import { AppContainer } from '../../../components'

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  player: {}
})

type TabBottom2T = {
  toggled: boolean,
  track: { artist: string, title: string, album: string, cover: string },
  textStyle?: TextStyleProp,
  viewStyle?: ViewStyleProp
}

const TabBottom2 = memo<TabBottom2T>(() => {
  const { container } = styles
  const [elem, setElem] = useState({})
  const [loading, setLoading] = useState(false)

  const playbackState = usePlaybackState()

  const setup = async () => {
    await TrackPlayer.setupPlayer({})
    await TrackPlayer.updateOptions({
      stopWithApp: false,
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

  const getData = async () => {
    setLoading(true)
    try {
      const array = await DataStore.query(Playlist, Predicates.ALL, {
        page: 0,
        limit: 50
      })
      const random = _.shuffle(array)
      setElem(random)
      setLoading(false)
    } catch (err) {
      Analytics.record({
        name: 'TabBottom1',
        attributes: err
      })
    }
  }

  useEffect(() => {
    setup()
    getData()
  }, [])

  const togglePlayback = async () => {
    const currentTrack = await TrackPlayer.getCurrentTrack()
    if (currentTrack == null) {
      await TrackPlayer.reset()
      await TrackPlayer.add(elem)
      await TrackPlayer.play()
    } else if (playbackState === TrackPlayer.STATE_PAUSED) {
      // eslint-disable-line
      await TrackPlayer.play()
    } else {
      await TrackPlayer.pause()
    }
  }

  const skipToNext = async () => {
    await TrackPlayer.skipToNext()
  }

  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious()
  }

  const { player } = styles
  return (
    <AppContainer loading={loading}>
      <View style={container}>
        <Player onNext={skipToNext} style={player} onPrevious={skipToPrevious} onTogglePlayback={togglePlayback} />
      </View>
    </AppContainer>
  )
})

export { TabBottom2 }
// createPlaylist({
//   url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/Radio/14-Majal-DeepBlue.wav',
//   title: 'Deep Blue',
//   artist: 'Majal',
//   artwork: 'https://s3.eu-central-1.wasabisys.com/ghashtag/Radio/Cover/Tathastu.png',
//   duration: 552
// })
// const createPlaylist = async (values) => {
//   console.log('values', values)
//   try {
//     const uri = await DataStore.save(new Playlist({ ...values }))
//     console.log('uri', uri)
//   } catch (err) {
//     console.log('err', err)
//   }
// }

// const deleteJob = async () => {
//   //await DataStore.clear(Gallery)
//   try {
//     const obj = await DataStore.query(Playlist, 'd5e484c2-6c3e-4326-ba54-dccd4235cd0d')
//     const del = await DataStore.delete(obj)
//     console.warn('del', del)
//   } catch (error) {
//     //console.log('error', error)
//   }
// }

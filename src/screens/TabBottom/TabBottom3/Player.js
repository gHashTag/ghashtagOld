import React, { useState } from 'react'
import TrackPlayer, { useTrackPlayerProgress, usePlaybackState, useTrackPlayerEvents } from 'react-native-track-player'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const styles = StyleSheet.create({
  cardStyle: {
    width: '80%',
    elevation: 1,
    borderRadius: 4,
    shadowRadius: 2,
    shadowOpacity: 0.1,
    alignItems: 'center',
    shadowColor: 'black',
    backgroundColor: 'white',
    shadowOffset: { width: 0, height: 1 }
  },
  coverStyle: {
    width: 140,
    height: 140,
    marginTop: 20,
    backgroundColor: 'grey'
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
    fontSize: 18,
    textAlign: 'center'
  }
})

const ProgressBar = () => {
  const progress = useTrackPlayerProgress()

  return (
    <View style={styles.progress}>
      <View style={{ flex: progress.position, backgroundColor: 'blue' }} />
      <View
        style={{
          flex: progress.duration - progress.position,
          backgroundColor: 'grey'
        }}
        k
      />
    </View>
  )
}

const {
  controlButtonContainer,
  controlButtonText,
  cardStyle,
  artistStyle,
  coverStyle,
  controlsStyle,
  titleStyle
} = styles

function ControlButton({ title, onPress }) {
  return (
    <TouchableOpacity style={controlButtonContainer} onPress={onPress}>
      <Text style={controlButtonText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default function Player(props) {
  const playbackState = usePlaybackState()
  const [trackTitle, setTrackTitle] = useState('')
  const [trackArtwork, setTrackArtwork] = useState()
  const [trackArtist, setTrackArtist] = useState('')

  useTrackPlayerEvents(['playback-track-changed'], async event => {
    if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
      const track = await TrackPlayer.getTrack(event.nextTrack)
      const { title, artist, artwork } = track || {}
      setTrackTitle(title)
      setTrackArtist(artist)
      setTrackArtwork(artwork)
    }
  })

  const { style, onNext, onPrevious, onTogglePlayback } = props

  var middleButtonText = 'Play' // eslint-disable-line

  if (playbackState === TrackPlayer.STATE_PLAYING || playbackState === TrackPlayer.STATE_BUFFERING) {
    middleButtonText = 'Pause'
  }

  return (
    <View style={[cardStyle, style]}>
      <Image style={coverStyle} source={{ uri: trackArtwork }} />
      <ProgressBar />
      <Text style={titleStyle}>{trackTitle}</Text>
      <Text style={artistStyle}>{trackArtist}</Text>
      <View style={controlsStyle}>
        <ControlButton title={'<<'} onPress={onPrevious} />
        <ControlButton title={middleButtonText} onPress={onTogglePlayback} />
        <ControlButton title={'>>'} onPress={onNext} />
      </View>
    </View>
  )
}

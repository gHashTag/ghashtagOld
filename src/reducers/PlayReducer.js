import { PLAY_CHANGE } from '../actions/types'

const INITIAL_STATE = {
  toggled: true,
  track: {
    id: '0',
    artist: '@playra & @playom',
    title: 'Ahaṃkāra',
    album: 'Tathāstu',
    cover: 'https://s3.eu-central-1.wasabisys.com/ghashtag/Radio/Cover/Tathastu.png',
    uri: 'https://s3.eu-central-1.wasabisys.com/ghashtag/Radio/@playra&@playom00.wav'
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLAY_CHANGE:
      return {
        ...state,
        toggled: !action.payload.toggled,
        track: action.payload.track
      }
    default:
      return state
  }
}

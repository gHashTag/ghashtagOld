import { PLAY_CHANGE } from './types'

export const setPlay = obj => ({
  type: PLAY_CHANGE,
  payload: obj 
})

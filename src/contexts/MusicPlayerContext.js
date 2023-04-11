import React, { useState, createContext } from 'react'
import Track1 from '../mp3/track1.mp3'
import Track2 from '../mp3/track2.mp3'
import Track3 from '../mp3/track3.mp3'
import Track4 from '../mp3/track4.mp3'
// Create a new context
const MusicPlayerContext = createContext()
// Define the default values for the context
const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: 'Coniferous Forest',
      file: Track1
    },
    {
      name: 'Floating Abstract',
      file: Track2
    },
    {
      name: 'Waterfall',
      file: Track3
    },
    {
      name: '15s',
      file: Track4
    }
  ],
  currentTrackIndex: null,
  isPlaying: false
}
// Create a provider for the context
const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues)
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  )
}
export { MusicPlayerContext, MusicPlayerProvider }

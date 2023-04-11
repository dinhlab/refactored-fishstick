import { useContext } from 'react'
import { MusicPlayerContext } from '../contexts/MusicPlayerContext'
// Custom hook to provide functions related to music player functionality
const useMusicPlayer = () => {
  // Get the state and setState function from MusicPlayerContext
  const { state, setState } = useContext(MusicPlayerContext)
  // Play a specific track by index
  function playTrack (index) {
    // If the selected track is already playing, toggle the play/pause
    if (index === state.currentTrackIndex) {
      togglePlay()
    } else {
      // Pause the currently playing audio player
      state.audioPlayer.pause()
      // Create a new audio player with the selected track and set it to loop
      const audio = new Audio(state.tracks[index].file)
      audio.loop = true
      // Set the new audio player as the current audio player and play it
      state.audioPlayer = audio
      state.audioPlayer.play()
      // Update the current track index and playing status in the state
      setState((state) => ({
        ...state,
        currentTrackIndex: index,
        isPlaying: true
      }))
    }
  }
  // Toggle play/pause
  function togglePlay () {
    if (state.isPlaying) {
      state.audioPlayer.pause()
    } else {
      state.audioPlayer.play()
    }
    // Toggle the playing status in the state
    setState((state) => ({ ...state, isPlaying: !state.isPlaying }))
  }
  // Play the previous track in the tracks array
  function playPreviousTrack () {
    const newIndex =
      (((state.currentTrackIndex + -1) % state.tracks.length) +
        state.tracks.length) %
      state.tracks.length
    playTrack(newIndex)
  }
  // Play the next track in the tracks array
  function playNextTrack () {
    const newIndex = (state.currentTrackIndex + 1) % state.tracks.length
    playTrack(newIndex)
  }
  // Return an object with functions and current state values for use in other components
  return {
    playTrack,
    togglePlay,
    currentTrackName:
      state.currentTrackIndex !== null &&
      state.tracks[state.currentTrackIndex].name,
    trackList: state.tracks,
    isPlaying: state.isPlaying,
    currentTrackIndex: state.currentTrackIndex,
    playPreviousTrack,
    playNextTrack
  }
}
// Export the custom hook as the default export
export default useMusicPlayer

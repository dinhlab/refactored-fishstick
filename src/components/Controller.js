import useMusicPlayer from '../hooks/usePlayerProvider'
import IconButton from '@mui/material/IconButton'
import SkipPrevious from '@mui/icons-material/SkipPrevious'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import PauseIcon from '@mui/icons-material/Pause'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import Box from '@mui/material/Box'
// Define styles object
const style = {
  box: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 2
  },
  icon: {
    color: 'DarkMagenta'
  }
}
// Define Controller component
function Controller () {
  // Use custom hook to get necessary values and functions
  const {
    currentTrackIndex,
    isPlaying,
    playTrack,
    playPreviousTrack,
    playNextTrack
  } = useMusicPlayer()
  // Define function to handle Play/Pause button click
  const handleTogglePlay = () => {
    if (currentTrackIndex) {
      playTrack(currentTrackIndex)
    } else {
      playTrack(0)
    }
  }
  // Define function to handle Previous button click
  const handlePlayPreviousTrack = () => {
    playPreviousTrack()
  }
  // Define function to handle Next button click
  const handlePlayNextTrack = () => {
    playNextTrack()
  }
  // Render component
  return (
    <Box sx={style.box}>
      <IconButton onClick={handlePlayPreviousTrack}>
        <SkipPrevious sx={style.icon} />
      </IconButton>
      <IconButton onClick={handleTogglePlay}>
        {isPlaying
          ? (
            <PauseIcon sx={style.icon} />
            )
          : (
            <PlayArrowIcon sx={style.icon} />
            )}
      </IconButton>
      <IconButton onClick={handlePlayNextTrack}>
        <SkipNextIcon sx={style.icon} />
      </IconButton>
    </Box>
  )
}
// Export component
export default Controller
